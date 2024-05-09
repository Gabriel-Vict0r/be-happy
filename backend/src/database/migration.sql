-- Database: beHappy

-- DROP DATABASE "beHappy";

CREATE DATABASE "beHappy"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE TABLE public.location
(
    latitude integer NOT NULL,
    longitude integer NOT NULL,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.location
    OWNER to admin;

CREATE TABLE public.orphanage
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    cnpj character varying COLLATE pg_catalog."default" NOT NULL,
    about character varying COLLATE pg_catalog."default" NOT NULL,
    instructions character varying COLLATE pg_catalog."default" NOT NULL,
    acept_weekend boolean NOT NULL,
    "createdAt" timestamp without time zone NOT NULL DEFAULT now(),
    "updatedAt" timestamp without time zone NOT NULL DEFAULT now(),
    phone character varying COLLATE pg_catalog."default" NOT NULL,
    id_location character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_1fe2e541acc9d65ff8bf6380286" PRIMARY KEY (id),
    CONSTRAINT "UQ_b3fe0f21874e5ca13c6071ef620" UNIQUE (id_location),
    CONSTRAINT "FK_b3fe0f21874e5ca13c6071ef620" FOREIGN KEY (id_location)
        REFERENCES public.location (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.orphanage
    OWNER to admin;

CREATE TABLE public.hours
(
    initial_hour timestamp without time zone NOT NULL,
    final_hour timestamp without time zone NOT NULL,
    id character varying COLLATE pg_catalog."default" NOT NULL,
    id_orphanage character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_83e53497f998d850626210539f2" PRIMARY KEY (id),
    CONSTRAINT "FK_2d47beb63f249976757f1a9fe41" FOREIGN KEY (id_orphanage)
        REFERENCES public.orphanage (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.hours
    OWNER to admin;

CREATE TABLE public.picture
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    url character varying COLLATE pg_catalog."default" NOT NULL,
    id_orphanage character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_31ccf37c74bae202e771c0c2a38" PRIMARY KEY (id),
    CONSTRAINT "FK_7b72198e77e2ed7355fc4ab66dc" FOREIGN KEY (id_orphanage)
        REFERENCES public.orphanage (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.picture
    OWNER to admin;

CREATE OR REPLACE VIEW public.orphanage_view
 AS
 SELECT orphanage.id,
    orphanage.name,
    orphanage.about,
    location.latitude,
    location.longitude,
    orphanage.instructions,
    orphanage.acept_weekend,
    orphanage.phone,
    hours.initial_hour,
    hours.final_hour
   FROM orphanage
     LEFT JOIN location ON location.id::text = orphanage.id_location::text
     LEFT JOIN hours ON hours.id_orphanage::text = orphanage.id::text;

ALTER TABLE public.orphanage_view
    OWNER TO admin;