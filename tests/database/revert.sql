-- Revert vibetype:data_test from pg

BEGIN;

DELETE FROM vibetype.profile_picture;
DELETE FROM vibetype.upload;
DELETE FROM vibetype.guest;
DELETE FROM vibetype.address;
DELETE FROM vibetype.event;
DELETE FROM vibetype.event_format;
DELETE FROM vibetype.event_category;
DELETE FROM vibetype.contact;
DELETE FROM vibetype_private.account;

COMMIT;
