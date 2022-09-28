insert into "classes" ("class", "hitDie", "equipment")
values ('Paladin', '1D10', 'Chain mail'),
('Warlock', '1D8', 'Leather armor'),
('Wizard', '1D6', 'Arcane focus');
insert into "races" ("race", "abilityScore", "speed")
values ('Human', '+1 All', '30 feet'),
('Dragonborn', '+2 Strength, +1 Charisma', '30 feet'),
('Elf', '+2 Dexterity', '30 feet');
insert into "backgrounds" ("background", "skillProficiencies", "languages", "equipment")
values ('Fisher', 'History, Survival', '+1 Any', 'Fishing tackle, a net, a favorite fishing lure or oiled leather wading boots, a set of traveler"s clothes, and a belt pouch containing 10 gp'),
('Acolyte', 'Insight, Religion', '+2 Any', 'A holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a belt pouch containing 15 gp'),
('Criminal', 'Deception, Stealth', '0', 'A crowbar, a set of dark common clothes including a hood, and a belt pouch containing 15 gp');
insert into "spells" ("spell", "lvl", "type", "description")
values ('Fireball', '3rd', 'evocation', 'A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren’t being worn or carried.');
insert into "characters" ("name", "class", "race", "background")
values ('kris', 'pally', 'human', 'wanderer'),
('bob', 'Ranger', 'elf', 'thief');
