--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: company; Type: TABLE; Schema: public; Owner: nlethanh
--

CREATE TABLE public.company (
    id bigint NOT NULL,
    version integer,
    name character varying(100)
);


ALTER TABLE public.company OWNER TO nlethanh;

--
-- Name: contact; Type: TABLE; Schema: public; Owner: nlethanh
--

CREATE TABLE public.contact (
    id bigint NOT NULL,
    version integer,
    email character varying(100),
    firstname character varying(100),
    lastname character varying(100),
    company_id integer,
    status_id integer
);


ALTER TABLE public.contact OWNER TO nlethanh;

--
-- Name: contact_id_seq; Type: SEQUENCE; Schema: public; Owner: nlethanh
--

ALTER TABLE public.contact ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.contact_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 1000
    CACHE 60
);


--
-- Name: status; Type: TABLE; Schema: public; Owner: nlethanh
--

CREATE TABLE public.status (
    id bigint NOT NULL,
    version integer,
    name character varying(100)
);


ALTER TABLE public.status OWNER TO nlethanh;

--
-- Name: users; Type: TABLE; Schema: public; Owner: nlethanh
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    username character varying(100),
    password character(100),
    email character varying(100),
    address character varying(200),
    version integer
);


ALTER TABLE public.users OWNER TO nlethanh;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: nlethanh
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 1000
    CACHE 1
);


--
-- Data for Name: company; Type: TABLE DATA; Schema: public; Owner: nlethanh
--

COPY public.company (id, version, name) FROM stdin;
6	1	Phillips Van Heusen Corp.
7	1	Avaya Inc.
8	1	Laboratory Corporation of America Holdings
9	1	AutoZone, Inc.
10	1	Linens 'n Things Inc.
\.


--
-- Data for Name: contact; Type: TABLE DATA; Schema: public; Owner: nlethanh
--

COPY public.contact (id, version, email, firstname, lastname, company_id, status_id) FROM stdin;
11	1	eula.lane@jigrormo.ye	Eula	Lane	8	1
12	1	barry.rodriquez@zun.mm	Barry	Rodriquez	7	5
13	1	eugenia.selvi@capfad.vn	Eugenia	Selvi	6	3
14	1	alejandro.miles@dec.bn	Alejandro	Miles	10	3
15	1	cora.tesi@bivo.yt	Cora	Tesi	6	4
16	1	marguerite.ishii@judbilo.gn	Marguerite	Ishii	10	2
18	1	gene.goodman@kem.tl	Gene	Goodman	8	5
19	1	lettie.bennett@odeter.bb	Lettie	Bennett	6	1
20	1	mabel.leach@lisohuje.vi	Mabel	Leach	10	2
21	1	jordan.miccinesi@duod.gy	Jordan	Miccinesi	8	3
22	1	marie.parkes@nowufpus.ph	Marie	Parkes	7	1
23	1	rose.gray@kagu.hr	Rose	Gray	9	4
24	1	garrett.stokes@fef.bg	Garrett	Stokes	9	3
25	1	barbara.matthieu@derwogi.jm	Barbara	Matthieu	7	5
26	1	jean.rhodes@wehovuce.gu	Jean	Rhodes	7	3
27	1	jack.romoli@zamum.bw	Jack	Romoli	6	4
28	1	pearl.holden@dunebuh.cr	Pearl	Holden	8	1
29	1	belle.montero@repiwid.si	Belle	Montero	9	5
30	1	olive.molina@razuppa.ga	Olive	Molina	6	2
31	1	minerva.todd@kulmenim.ad	Minerva	Todd	9	3
32	1	bobby.pearson@ib.kg	Bobby	Pearson	9	1
33	1	larry.ciappi@ba.lk	Larry	Ciappi	10	2
34	1	ronnie.salucci@tohhij.lv	Ronnie	Salucci	9	1
35	1	walter.grossi@tuvo.sa	Walter	Grossi	9	1
36	1	frances.koopmans@foga.tw	Frances	Koopmans	7	5
37	1	frances.fujimoto@uswuzzub.jp	Frances	Fujimoto	6	5
38	1	olivia.vidal@hivwerip.vc	Olivia	Vidal	9	2
39	1	edna.henry@gugusu.rw	Edna	Henry	8	4
40	1	lydia.brun@zedekak.md	Lydia	Brun	7	3
41	1	jay.blake@ral.mk	Jay	Blake	10	4
42	1	isabel.serafini@turuhu.bh	Isabel	Serafini	10	1
43	1	rebecca.carter@omjo.et	Rebecca	Carter	8	4
44	1	maurice.fabbrini@rig.bh	Maurice	Fabbrini	9	3
45	1	ollie.turnbull@sicewap.org	Ollie	Turnbull	6	1
46	1	jerry.hopkins@fo.mh	Jerry	Hopkins	9	5
47	1	nora.lyons@gegijap.na	Nora	Lyons	10	1
48	1	anne.weis@kuvesa.pe	Anne	Weis	7	4
49	1	louise.gauthier@lapahu.mt	Louise	Gauthier	6	2
50	1	lloyd.fani@zev.ru	Lloyd	Fani	8	1
51	1	maud.dunn@nabeaga.ni	Maud	Dunn	6	1
52	1	henry.gigli@kaot.ps	Henry	Gigli	6	5
53	1	virgie.werner@tawuctuj.cf	Virgie	Werner	10	4
54	1	gregory.cozzi@eh.ru	Gregory	Cozzi	8	2
55	1	lucinda.gil@fajjusuz.kr	Lucinda	Gil	7	5
56	1	gertrude.verbeek@pave.cc	Gertrude	Verbeek	6	5
57	1	mattie.graham@ispaviw.gt	Mattie	Graham	7	2
58	1	bryan.shaw@ha.ee	Bryan	Shaw	9	1
59	1	essie.adams@iliat.cw	Essie	Adams	8	5
60	1	gary.osborne@do.ga	Gary	Osborne	7	5
17	2	hello@gmail.com	hello	hello	8	1
1	1	hello2@gmail.com	hello2	hello2	8	1
2	1	hello2@gmail.com	hello2	hello2	8	1
3	1	hello2@gmail.com	hello2	hello2	8	1
4	1	hello2@gmail.com	hello2	hello2	8	1
5	1	hello2@gmail.com	hello2	hello2	8	1
6	1	hello2@gmail.com	hello2	hello2	8	1
7	1	hello2@gmail.com	hello2	hello2	8	1
8	1	hello2@gmail.com	hello2	hello2	8	1
9	1	hello2@gmail.com	hello2	hello2	8	1
10	1	hello2@gmail.com	hello2	hello2	8	1
61	1	hello2@gmail.com	hello2	hello2	8	1
62	1	hello2@gmail.com	hello2	hello2	8	1
\.


--
-- Data for Name: status; Type: TABLE DATA; Schema: public; Owner: nlethanh
--

COPY public.status (id, version, name) FROM stdin;
1	1	Imported lead
2	1	Not contacted
3	1	Contacted
4	1	Customer
5	1	Closed (lost)
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: nlethanh
--

COPY public.users (id, username, password, email, address, version) FROM stdin;
5	admin	$2a$10$5KbvJFM8EfGpfpo07OexbO85YopSL1R/U/6T5cCm.oIhnUdKNGWBC                                        	admin@gmail.com	\N	0
6	eula	$2a$10$3hoGjauPQNyOhuRCCbybA.tQD0rUp8Imt0EHt1Pd.P5x42NlEJtRK                                        	eula@gmail.com	\N	0
7	admin	$2a$10$4bkJqP6t1gU4.FJwqBkzsetb.9C3y2mp6L2WTsw1KF9YMCC1Z.FFO                                        	admin	\N	0
\.


--
-- Name: contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nlethanh
--

SELECT pg_catalog.setval('public.contact_id_seq', 141, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nlethanh
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: company company_pkey; Type: CONSTRAINT; Schema: public; Owner: nlethanh
--

ALTER TABLE ONLY public.company
    ADD CONSTRAINT company_pkey PRIMARY KEY (id);


--
-- Name: contact contact_pkey; Type: CONSTRAINT; Schema: public; Owner: nlethanh
--

ALTER TABLE ONLY public.contact
    ADD CONSTRAINT contact_pkey PRIMARY KEY (id);


--
-- Name: status status_pkey; Type: CONSTRAINT; Schema: public; Owner: nlethanh
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: nlethanh
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

