FROM rstudio/plumber:v1.0.0

# Install necessary R packages
RUN R -e "install.packages(c('dplyr','plumber'), repos='http://cran.rstudio.com/')"

# Copy the R script and Rdata into the container
COPY app.R /app/app.R
COPY data/plantRecommend.Rdata /app/data/plantRecommend.Rdata

# Set the working directory
WORKDIR /app

# Expose the port
EXPOSE 8000

# Run the R script

CMD ["Rscript", "/app/app.R"]

