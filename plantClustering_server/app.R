library(plumber)
library(dplyr)

# Define the endpoint
#* @post /cluster
#* @param input_level The care level of the plant
#* @param input_water_need The water requirement of the plant
#* @param input_purpose The average purpose value
#* @param input_temperature The average temperature value
#* @param input_sunright The average sunright value
#* @serializer json
function(input_level, input_water_need, input_purpose, input_temperature, input_sunright) {
  load("/app/data/plantRecommend.Rdata")  # Absolute path to RData file
  
  # 사용자 입력
  user_input <- data.frame(
    level = as.numeric(input_level),
    water_need = as.numeric(input_water_need),
    purpose = as.numeric(input_purpose),
    temperature = as.numeric(input_temperature),
    sunright = as.numeric(input_sunright)
  )

  # 유사도 계산 함수
  calculate_similarity <- function(data, user_input) {
  data %>%
    rowwise() %>%
    mutate(
      level_similarity = ifelse(level == user_input$level, 1, 0),
      water_similarity = ifelse(water_need == user_input$water_need, 1, 0),
      purpose_similarity = max(ifelse(purpose_1 == user_input$purpose, 1, 0), ifelse(purpose_2 == user_input$purpose, 1, 0)),
      temperature_similarity = ifelse(temperature == user_input$temperature, 1, 0),
      sunright_similarity = max(ifelse(sunright_1 == user_input$sunright, 1, 0), ifelse(sunright_2 == user_input$sunright, 1, 0), ifelse(sunright_3 == user_input$sunright, 1, 0)),
      total_similarity = 6 * level_similarity + 3 * purpose_similarity + 1 * water_similarity + 1 * temperature_similarity + 1 * sunright_similarity,
      similarity_percentage = (total_similarity / 12) * 100
    ) %>%
    arrange(desc(total_similarity), desc(similarity_percentage)) %>%
    select(content_number, plant_name, similarity_percentage, level, water_need, purpose_1, purpose_2, temperature, sunright_1, sunright_2, sunright_3) %>%
    head(5)
}

# 유사도 계산 및 추천 식물 출력
recommended_plants <- calculate_similarity(cleanedData, user_input)
return(recommended_plants)
}
