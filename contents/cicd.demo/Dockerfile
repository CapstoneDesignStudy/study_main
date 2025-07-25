# 1단계: Build Stage
FROM gradle:8.4.0-jdk17 AS build
WORKDIR /app
COPY . .
RUN gradle bootJar --no-daemon

# 2단계: Run Stage
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
