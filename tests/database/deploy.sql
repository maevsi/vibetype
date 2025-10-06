-- Deploy vibetype:data_test to pg
BEGIN;

DO $$
DECLARE
  _account_id_jonas UUID;
  _account_id_peter UUID;
  _address_id_frankfurt UUID;
  _address_id_kassel UUID;
  _contact_id_jonas UUID;
  _contact_id_peter UUID;
  _legal_term_id    UUID;
BEGIN
  SELECT id INTO _legal_term_id FROM vibetype.legal_term LIMIT 1;

  IF (_legal_term_id IS NULL) THEN
    INSERT INTO vibetype.legal_term (term, version)
      VALUES ('Be excellent to each other', '0.0.0')
      RETURNING id INTO _legal_term_id;
  END IF;

  PERFORM vibetype.account_registration(
    '1970-01-01',
    'mail+sqitch-1@maev.si',
    'en',
    _legal_term_id,
    'password',
    'jonas'
  );

  SELECT id
    INTO _account_id_jonas
    FROM vibetype.account
    WHERE username = 'jonas';

  PERFORM vibetype.account_email_address_verification(
    (
      SELECT email_address_verification
      FROM vibetype_private.account
      WHERE id = _account_id_jonas
    )
  );

  PERFORM vibetype.account_registration(
    '1970-01-01',
    'mail+sqitch-2@maev.si',
    'de',
    _legal_term_id,
    'password',
    'peter'
  );

  SELECT id
    INTO _account_id_peter
    FROM vibetype.account
    WHERE username = 'peter';

  SELECT id
    FROM vibetype.contact
    WHERE account_id = _account_id_jonas
      AND created_by = _account_id_jonas INTO _contact_id_jonas;

  SELECT id
    FROM vibetype.contact
    WHERE account_id = _account_id_peter
      AND created_by = _account_id_peter INTO _contact_id_peter;

  INSERT INTO vibetype.contact (
      "id",
      -- "address",
      "email_address",
      "first_name",
      "last_name",
      "created_by"
    )
    VALUES (
      '59462df6-10a9-11ea-bf8e-0f50c4d91a5a',
      -- e'A B\n12345 D',
      'mail+sqitch-3@maev.si',
      'Max',
      'Mustermann',
      _account_id_jonas
    );

  INSERT INTO vibetype.address (
    name,
    location,
    created_by
  ) VALUES (
    'Frankfurt',
    ST_Point(8.650, 50.113, 4326),
    _account_id_jonas
  ) RETURNING id INTO _address_id_frankfurt;

  INSERT INTO vibetype.address (
    name,
    location,
    created_by
  ) VALUES (
    'Kassel',
    ST_Point(9.476, 51.304, 4326),
    _account_id_jonas
  ) RETURNING id INTO _address_id_kassel;

  INSERT INTO vibetype.event_category (
    name
  ) VALUES
    ('art-and-culture'),
    ('business'),
    ('comedy'),
    ('education'),
    ('fashion-and-lifestyle'),
    ('food-and-drink'),
    ('literature'),
    ('music-and-entertainment'),
    ('other'),
    ('politics'),
    ('social'),
    ('sports-and-fitness');

  INSERT INTO vibetype.event_format (
    name
  ) VALUES
    ('conference'),
    ('demo'),
    ('exhibition'),
    ('festival'),
    ('hackathon'),
    ('lecture'),
    ('live-performance'),
    ('meetup'),
    ('other'),
    ('party'),
    ('seminar'),
    ('workshop');

  INSERT INTO vibetype.event (
      "id",
      "name",
      "slug",
      "visibility",
      "guest_count_maximum",
      "created_by",
      "description",
      "start",
      "end"
    )
    VALUES (
      '59462df6-10a9-11ea-bf8e-0f50c4d91a6a',
      'Limited',
      'limited',
      'public',
      2,
      _account_id_jonas,
      'Event with limited capacity.',
      '2020-11-23 02:00:00.000000+00',
      '2020-11-23 09:00:00.000000+00'
    );

  INSERT INTO vibetype.event (
      "id",
      "address_id",
      "name",
      "slug",
      "visibility",
      "created_by",
      "start",
      "end"
    )
    VALUES (
      '59462df6-10a9-11ea-bf8e-0f50c4d91a6b',
      _address_id_kassel,
      'Foreign Invited',
      'foreign-invited',
      'public',
      _account_id_peter,
      '2020-11-27 03:54:29.090009+00',
      '2020-11-27 05:56:23.090009+00'
    );

  INSERT INTO vibetype.event (
      "id",
      "address_id",
      "name",
      "slug",
      "visibility",
      "created_by",
      "start",
      "end"
    )
    VALUES (
      '59462df6-10a9-11ea-bf8e-0f50c4d91a6c',
      _address_id_frankfurt,
      'Foreign Uninvited',
      'foreign-uninvited',
      'public',
      _account_id_peter,
      '2020-11-27 03:54:29.090009+00',
      '2020-11-27 05:56:23.090009+00'
    );

  INSERT INTO vibetype.event (
      "id",
      "name",
      "slug",
      "visibility",
      "created_by",
      "description",
      -- "location",
      "start"
    )
    VALUES (
      '59462df6-10a9-11ea-bf8e-0f50c4d91a6d',
      'Private Party',
      'e2',
      'private',
      _account_id_jonas,
      'Offices parties lasting outward nothing age few resolve. Impression to discretion understood to we interested he excellence. Him remarkably use projection collecting. Going about eat forty world has round miles. Attention affection at my preferred offending shameless me if agreeable. Life lain held calm and true neat she. Much feet each so went no from. Truth began maids linen an mr to after.',
      -- 'Schutz- und Grillhütte Frommershausen, 34246 Vellmar',
      '2019-11-27 03:54:29.090009+00'
    );

  INSERT INTO vibetype.guest (
      "id",
      "event_id",
      "contact_id",
      "feedback",
      "feedback_paper"
    )
    VALUES (
      '59462df6-10a9-11ea-bf8e-0f50c4d91a7a',
      '59462df6-10a9-11ea-bf8e-0f50c4d91a6a',
      '59462df6-10a9-11ea-bf8e-0f50c4d91a5a',
      'accepted',
      'paper'
    );

  INSERT INTO vibetype.guest (
      "id",
      "event_id",
      "contact_id",
      "feedback",
      "feedback_paper"
    )
    VALUES (
      '59462df6-10a9-11ea-bf8e-0f50c4d91a7b',
      '59462df6-10a9-11ea-bf8e-0f50c4d91a6d',
      '59462df6-10a9-11ea-bf8e-0f50c4d91a5a',
      'canceled',
      'digital'
    );

  INSERT INTO vibetype.guest ("id", "event_id", "contact_id")
    VALUES (
      '59462df6-10a9-11ea-bf8e-0f50c4d91a7c',
      '59462df6-10a9-11ea-bf8e-0f50c4d91a6b',
      _contact_id_jonas
    );

  INSERT INTO vibetype.guest ("id", "event_id", "contact_id")
    VALUES (
      '59462df6-10a9-11ea-bf8e-0f50c4d91a7d',
      '59462df6-10a9-11ea-bf8e-0f50c4d91a6a',
      _contact_id_peter
    );
END $$;

COMMIT;
