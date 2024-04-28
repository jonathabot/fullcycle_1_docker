FROM golang:alpine AS builder

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 go build -o /desafio-1-go

FROM scratch

WORKDIR /

COPY --from=builder /desafio-1-go /desafio-1-go

ENTRYPOINT [ "/desafio-1-go" ]