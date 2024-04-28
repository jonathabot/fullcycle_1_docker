FROM nginx:latest

COPY html /usr/share/nginx/htmt

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]