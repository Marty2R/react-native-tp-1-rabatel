# DB

## Table restaurant

create table
public.restaurant (
id character varying not null,
created_at timestamp with time zone not null default now(),
restaurant_name text null,
restaurant_adress text null,
restaurant_note text null,
restaurant_img text null,
delivery_fees numeric null,
constraint restaurant_pkey primary key (id)
) tablespace pg_default;

## Table profiles

create table
public.profiles (
id uuid not null,
updated_at timestamp with time zone null,
username text null,
full_name text null,
avatar_url text null,
website text null,
constraint profiles_pkey primary key (id),
constraint profiles_username_key unique (username),
constraint profiles_id_fkey foreign key (id) references auth.users (id),
constraint username_length check ((char_length(username) >= 3))
) tablespace pg_default;

## Table cart

create table
public.cart (
id character varying not null,
created_at timestamp with time zone not null default now(),
products json null,
constraint cart_pkey primary key (id),
constraint cart_id_fkey foreign key (id) references restaurant (id)
) tablespace pg_default;
