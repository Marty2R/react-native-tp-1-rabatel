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