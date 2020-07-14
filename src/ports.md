ports

8081 : SecurityService
8082 : ProfileManagementService
8083 : EntityActionService
8084 : CommunicationService
8085 : RatingsService


Dockerfile
FROM openjdk:8
ADD target/abc.jar abc.jar
EXPOSE 8085
ENTRYPOINT ["java" "-jar" "abc.jar"]

sudo docker build -f Dockerfile -t entity-action . 

account-0.0.1-SNAPSHOT.jar