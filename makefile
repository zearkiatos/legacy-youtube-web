build-env:
	touch .env && \
	echo "NODE_ENV=${NODE_ENV}" > .env && \
	echo "YOUTUBE_API_KEY=${YOUTUBE_API_KEY}" >> .env && \
    echo "YOUTUBE_BASE_URL=${YOUTUBE_BASE_URL}" >> .env && \
    echo "YOUTUBE_BASE_URL=${PORT}" >> .env