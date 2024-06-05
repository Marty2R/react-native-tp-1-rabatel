create table
public.cart (
id character varying not null,
created_at timestamp with time zone not null default now(),
products json null,
constraint cart_pkey primary key (id),
constraint cart_id_fkey foreign key (id) references restaurant (id)
) tablespace pg_default;
