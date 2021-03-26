From python:3.6-stretch

WORKDIR /backend

ADD . /backend

ENV FLASKCV_SECRET_KEY=baihrjrjgFEgrTHhobpirejgme
ENV FLASKCV_MAIL_PASSWORD=qwerty123!@#

RUN pip install -r requirements.txt

RUN pip install uWSGI

EXPOSE 5000

CMD ["uwsgi", "--http", "0.0.0.0:5000", "--enable-threads", "--wsgi-file", "/backend/main.py", "--callable", "app"]