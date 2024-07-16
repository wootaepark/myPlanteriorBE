FROM node:20.10.0

# 애플리케이션 디렉토리 생성
RUN mkdir -p /app
WORKDIR /app

# 애플리케이션 소스 코드 복사
COPY package.json package-lock.json /app/
RUN npm install

# 애플리케이션 소스 코드 복사
COPY . /app

# 개발 환경에서만 필요한 도구 설치
RUN npm install -g nodemon

# 컨테이너 실행 시 실행할 명령어
CMD ["nodemon", "-L", "server.js"]

# 환경 변수 설정
ENV PORT=3000
