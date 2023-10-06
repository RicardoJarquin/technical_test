FROM php:7.4-fpm-alpine

WORKDIR /var/www/html/

RUN apk add libpng libpng-dev libjpeg-turbo-dev libwebp-dev zlib-dev libxpm-dev libpq-dev gd && docker-php-ext-install gd

RUN apk add --no-cache autoconf \
      libzip-dev \
      zip \
    && docker-php-ext-install zip

RUN php -r "readfile('http://getcomposer.org/installer');" | php -- --install-dir=/usr/bin/ --filename=composer

RUN apk add --no-cache gnupg

RUN docker-php-ext-install pdo pdo_mysql mysqli

RUN docker-php-ext-enable pdo pdo_mysql mysqli

RUN apk add --no-cache autoconf \
      libxml2-dev \
      php-soap \
    && docker-php-ext-install soap

RUN apk add nano

RUN apk add htop

RUN echo 'memory_limit = 1024M' >> /usr/local/etc/php/conf.d/docker-php-mem-limit.ini

RUN echo 'post_max_size = 10M' >> /usr/local/etc/php/conf.d/docker-php-post-size.ini

RUN echo 'max_execution_time = 120' >> /usr/local/etc/php/conf.d/docker-php-time-exec.ini

RUN cp /usr/local/etc/php/php.ini-production /usr/local/etc/php/php.ini

EXPOSE 8080
