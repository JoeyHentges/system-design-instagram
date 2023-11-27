# System Design - Instagram

<b>NOTE:</b>
<i>None of this code is error tested and should not be replicated as is in a production environment. It is purely to check the functionality of this system design.</i>

docker build -t read-api .
docker build -t write-api .
docker build -t feed-generation-service .

docker compose up
