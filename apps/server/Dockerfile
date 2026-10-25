FROM node:22-alpine
WORKDIR /repo/apps/server
COPY apps/server/package.json ./
RUN npm install --omit=dev
COPY apps/server/ ./
COPY content/ /repo/content/
EXPOSE 4011
CMD ["node", "src/index.js"]
