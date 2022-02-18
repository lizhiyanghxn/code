FROM registry.sensetime.com/parrots-os/fe-base:v1.3

LABEL version="1.0"
LABEL description="sensegear-fe/dcp-components"

ENV ENVFILE=.env-container

RUN mkdir -p /app/frontend

COPY ["start.sh", ".env-container", "/app/frontend/"]
COPY dist /app/frontend/dist
WORKDIR /app/frontend

ENTRYPOINT ["bash", "start.sh"]
