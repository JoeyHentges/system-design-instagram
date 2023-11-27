CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name TEXT,
  email TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE photos (
  id INTEGER NOT NULL AUTO_INCREMENT,
  user_id INTEGER,
  path TEXT,
  latitude DECIMAL(10, 7),
  longitude DECIMAL(10, 7),
  timestamp TIMESTAMP,
  caption TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE follows (
  id INTEGER NOT NULL AUTO_INCREMENT,
  user_id INTEGER,
  following_id INTEGER,
  PRIMARY KEY (id)
);

INSERT INTO
  users(name, email)
VALUES
  (
    'Johannes Baustian',
    'johannesbaustian@email.com'
  ),
  (
    'Windell Whittington',
    'windellwhittington@email.com'
  ),
  ('Leanna Fendel', 'leannafendel@email.com'),
  ('Gerome Hexter', 'geromehexter@email.com'),
  (
    'Remington Coddington',
    'remingtoncoddington@email.com'
  ),
  (
    'Julianna Wyrzykowski',
    'juliannawyrzykowski@email.com'
  ),
  ('Greta Ciak', 'gretaciak@email.com'),
  ('Darnell Bier', 'darnellbier@email.com'),
  ('Magaly Greenier', 'magalygreenier@email.com'),
  ('Ari Fill', 'arifill@email.com');

INSERT INTO
  photos(
    user_id,
    path,
    latitude,
    longitude,
    timestamp,
    caption
  )
VALUES
  (
    10,
    'https://images.unsplash.com/photo-1699594165148-0eb85ec79666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTQyOA&ixlib=rb-4.0.3&q=80&w=1080',
    31.24428,
    116.15719,
    '2013-08-13 00:00:01',
    'labore sint ex ex exercitation laboris commodo deserunt deserunt ipsum elit nulla ut ex'
  ),
  (
    2,
    'https://images.unsplash.com/photo-1690988888672-896b6aee3f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTQ2MA&ixlib=rb-4.0.3&q=80&w=1080',
    5.49268,
    122.98321,
    '2015-11-07 00:00:01',
    'Lorem in Excepteur anim reprehenderit non nisi ullamco adipiscing adipiscing pariatur esse nostrud sint dolore dolor ut Ut proident eu amet dolor exercitation sunt cillum qui'
  ),
  (
    4,
    'https://images.unsplash.com/photo-1696523683663-164a0d20ae3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTQ2NQ&ixlib=rb-4.0.3&q=80&w=1080',
    -102.12893,
    120.74218,
    '2015-03-18 00:00:01',
    'nulla Lorem consectetur Excepteur laborum ipsum reprehenderit voluptate tempor officia do dolore dolor do culpa nostrud adipiscing ullamco elit enim adipiscing amet'
  ),
  (
    6,
    'https://images.unsplash.com/photo-1700540291181-2d7be661477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTQ2OQ&ixlib=rb-4.0.3&q=80&w=1080',
    -32.1796,
    -116.63606,
    '2015-07-09 00:00:01',
    'anim elit dolor labore et ea commodo cupidatat eu nostrud in magna officia consectetur elit et commodo id quis in deserunt culpa veniam culpa officia ipsum nostrud cupidatat amet veniam'
  ),
  (
    5,
    'https://images.unsplash.com/photo-1695527081827-fdbc4e77be9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTQ5Mg&ixlib=rb-4.0.3&q=80&w=1080',
    -154.04947,
    3.72221,
    '2017-07-15 00:00:01',
    'nulla fugiat labore reprehenderit pariatur Excepteur deserunt aliqua cillum est sed in laboris sit amet occaecat mollit exercitation exercitation culpa dolor cupidatat Duis laborum nulla fugiat laboris id aliqua dolor cupidatat incididunt incididunt tempor ut culpa aute aliqua ut ad ut Ut irure esse ipsum quis'
  ),
  (
    8,
    'https://images.unsplash.com/photo-1697801714915-b1816881bebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTQ4Mg&ixlib=rb-4.0.3&q=80&w=1080',
    13.02069,
    167.04771,
    '2009-03-05 00:00:01',
    'reprehenderit fugiat sed Lorem qui consequat Lorem laboris commodo magna nulla non culpa ex exercitation anim pariatur cillum ut nisi ut Lorem'
  ),
  (
    7,
    'https://plus.unsplash.com/premium_photo-1681400542769-bc899128bbff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTQ4Nw&ixlib=rb-4.0.3&q=80&w=1080',
    -110.85842,
    115.20276,
    '2014-02-04 00:00:01',
    'aliquip elit officia ex dolore cillum Lorem occaecat laborum aute Ut nostrud'
  ),
  (
    9,
    'https://images.unsplash.com/photo-1699006599483-3d217e2a3459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTUwMA&ixlib=rb-4.0.3&q=80&w=1080',
    84.01272,
    -67.54257,
    '2015-07-29 00:00:01',
    'Ut nisi eiusmod ipsum pariatur do dolore consequat amet sed ex fugiat labore ipsum magna dolore id magna nisi ea ad Excepteur adipiscing laboris do laborum culpa velit irure esse velit laboris adipiscing in dolor exercitation nisi'
  ),
  (
    1,
    'https://images.unsplash.com/photo-1698391145553-f579069cb6d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTUwNg&ixlib=rb-4.0.3&q=80&w=1080',
    138.88571,
    104.18521,
    '2020-10-05 00:00:01',
    'voluptate occaecat quis do tempor tempor ea aliquip deserunt est consectetur Excepteur est esse dolore nisi veniam'
  ),
  (
    9,
    'https://images.unsplash.com/photo-1699760813893-fe5b1e5695a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTUxMA&ixlib=rb-4.0.3&q=80&w=1080',
    29.39839,
    -132.09028,
    '2016-01-29 00:00:01',
    'reprehenderit sit culpa officia in dolor commodo elit mollit'
  ),
  (
    2,
    'https://images.unsplash.com/photo-1698764474049-948f80fd34d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTUxNg&ixlib=rb-4.0.3&q=80&w=1080',
    156.10388,
    -81.44518,
    '2010-08-28 00:00:01',
    'exercitation sunt aliqua consequat mollit sed non dolor nulla consectetur in laboris Excepteur Lorem ut officia'
  ),
  (
    2,
    'https://plus.unsplash.com/premium_photo-1674289121489-ed392912a753?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTUyNQ&ixlib=rb-4.0.3&q=80&w=1080',
    17.89013,
    -128.27463,
    '2010-09-17 00:00:01',
    'nostrud Ut do reprehenderit ipsum velit minim ut ad nisi exercitation exercitation ad minim id Excepteur ipsum est dolor aute nostrud consequat minim ipsum ea pariatur dolore'
  ),
  (
    3,
    'https://images.unsplash.com/photo-1697633284985-ec5ed4b1c8d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTUzNg&ixlib=rb-4.0.3&q=80&w=1080',
    -154.08057,
    -24.69627,
    '2022-01-27 00:00:01',
    'ut adipiscing velit tempor minim sit tempor qui irure mollit nisi nulla do est deserunt Ut ipsum consequat in amet dolore culpa est amet Ut non ut eu laboris quis sint enim nisi sed velit non irure ut esse dolor mollit sunt ut'
  ),
  (
    1,
    'https://images.unsplash.com/photo-1698709175575-1c274d093a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTU1MA&ixlib=rb-4.0.3&q=80&w=1080',
    65.62648,
    36.28587,
    '2012-09-11 00:00:01',
    'eiusmod Duis qui ea nulla dolor irure culpa esse aute id consequat mollit ex sed Lorem et cillum exercitation in Excepteur sit non cillum reprehenderit nulla labore ut dolor'
  ),
  (
    4,
    'https://plus.unsplash.com/premium_photo-1668279471288-4e712d40c989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTU1Nw&ixlib=rb-4.0.3&q=80&w=1080',
    -77.01576,
    62.3779,
    '2014-12-28 00:00:01',
    'consequat mollit eu officia nostrud officia culpa magna'
  ),
  (
    10,
    'https://images.unsplash.com/photo-1700317440746-7e16b87199b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTU2MQ&ixlib=rb-4.0.3&q=80&w=1080',
    69.83266,
    -104.76642,
    '2018-11-08 00:00:01',
    'commodo magna minim consequat'
  ),
  (
    9,
    'https://images.unsplash.com/photo-1698430484131-efc9f5ccba1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTU2NA&ixlib=rb-4.0.3&q=80&w=1080',
    41.12285,
    -93.87378,
    '2021-05-13 00:00:01',
    'ut mollit amet'
  ),
  (
    2,
    'https://plus.unsplash.com/premium_photo-1695239202526-9b848d03e60f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTU2OQ&ixlib=rb-4.0.3&q=80&w=1080',
    80.63628,
    -50.19929,
    '2019-01-24 00:00:01',
    'nostrud officia culpa laboris nulla consectetur mollit laboris laborum nulla dolor irure sed in sint in in velit nostrud consectetur ut eu pariatur nulla commodo'
  ),
  (
    1,
    'https://plus.unsplash.com/premium_photo-1700070732065-1fde170fa41a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTU3Mw&ixlib=rb-4.0.3&q=80&w=1080',
    17.07983,
    68.87458,
    '2010-09-08 00:00:01',
    'elit dolore sunt laborum aute mollit eiusmod proident eiusmod pariatur officia ut tempor'
  ),
  (
    9,
    'https://images.unsplash.com/photo-1696240547240-af6ae0c64953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMDkzOTU3OA&ixlib=rb-4.0.3&q=80&w=1080',
    119.08331,
    90.54304,
    '2017-11-16 00:00:01',
    'laborum Lorem ad id nulla tempor fugiat irure officia dolor dolor dolor consectetur dolore quis nulla velit eiusmod eiusmod reprehenderit minim anim nostrud cillum nisi eiusmod veniam cillum exercitation elit nisi reprehenderit aliqua'
  );

INSERT INTO
  follows(user_id, following_id)
VALUES
  (8, 6),
  (4, 8),
  (1, 10),
  (9, 10),
  (5, 3),
  (3, 4),
  (10, 7),
  (6, 5),
  (5, 1),
  (9, 2),
  (8, 2),
  (4, 2),
  (9, 10),
  (3, 8),
  (2, 1),
  (2, 5),
  (5, 3),
  (10, 4),
  (7, 6),
  (5, 4);