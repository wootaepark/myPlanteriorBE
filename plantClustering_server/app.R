library(plumber)
library(dplyr)

# Define the endpoint
#* @post /cluster
#* @param height The height of the plant
#* @param scent The scent level of the plant
#* @param level The care level of the plant
#* @param water_need The water requirement of the plant
#* @param leaf_shape The shape of the leaves
#* @param purpose_avg The average purpose value
#* @param leaf_color_avg The average leaf color value
#* @serializer json
function(height, scent, level, water_need, leaf_shape, purpose_avg, leaf_color_avg) {
  load("/app/data/plantClustering.Rdata")  # Absolute path to RData file
  
  new_point <- data.frame(height = as.numeric(height), 
                          scent = as.numeric(scent), 
                          level = as.numeric(level), 
                          water_need = as.numeric(water_need), 
                          leaf_shape = as.numeric(leaf_shape), 
                          purpose_avg = as.numeric(purpose_avg), 
                          leaf_color_avg = as.numeric(leaf_color_avg))
  
  scaled_data <- scale(numeric_data, new_point)
  mean_data <- attr(scaled_data, "scaled:center")
  sd_data <- attr(scaled_data, "scaled:scale")
  scaled_new_point <- scale(new_point, center = mean_data, scale = sd_data)
  
  level_match_data <- scaled_data[numeric_data$level == new_point$level, ]
  
  if (nrow(level_match_data) == 0) {
    closest_points <- data.frame()
  } else {
    euclidean_distance <- function(a, b) {
      sqrt(sum((a - b)^2))
    }
    distances_to_points <- apply(level_match_data, 1, function(point) euclidean_distance(scaled_new_point, point))
    closest_points_indices <- order(distances_to_points)[1:9]
    closest_points <- originData[numeric_data$level == new_point$level, ][closest_points_indices, ]
    closest_points$scores <- 1 / (distances_to_points[closest_points_indices] + 1e-5)  # Add a small number to avoid division by zero
  }
  return(closest_points)
}

