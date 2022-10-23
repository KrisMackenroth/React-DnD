insert into "classes" ("class", "hitDie", "equipment", "startHealth", "prof")
values ('Paladin', '1D10', 'Chain mail', 10, 'wisdom charisma'),
('Warlock', '1D8', 'Leather armor', 8, 'wisdom charisma'),
('Wizard', '1D6', 'Arcane focus', 6, 'intelligence wisdom'),
('Barbarian', '1D12', 'Greataxe', 12, 'strength constitution'),
('Druid', '1D8', 'Leather armor', 8, 'intelligence wisdom'),
('Cleric', '1D8', 'Holy Symbol', 8, 'wisdom charisma'),
('Fighter', '1D10', 'Chain Mail', 10, 'strength constitution'),
('Monk', '1D8', 'Shortsword', 8, 'strength dexterity'),
('Ranger', '1D10', 'Scale Mail', 10, 'strength dexterity'),
('Rogue', '1D8', 'Rapier', 8, 'dexterity intelligence'),
('Sorcerer', '1D6', 'Light Crossbow', 6, 'constitution charisma'),
('Artificer', '1D8', 'Arcane focus', 8, 'constitution intelligence'),
('Blood Hunter', '1D10', 'Studded Leather Armor', 10, 'dexterity intelligence'),
('Bard', '1D8', 'Lute', 8, 'dexterity charisma');
insert into "races" ("race","str","dex","con","wis","int","cha","speed")
values ('human',1,1,1,1,1,1,30),
('dragonborn',2,0,0,0,0,1,30),
('dwarf',0,0,2,0,0,0,25),
('gnome',0,0,0,0,2,0,25),
('half-elf',0,0,0,0,0,2,30),
('halfing',0,2,0,0,0,0,25),
('half-orc',2,0,1,0,0,0,30),
('tiefling',0,0,0,0,1,2,30),
('elf',0,2,0,0,0,0,30);
insert into "backgrounds" ("background", "skillProficiencies", "languages", "equipment")
values ('Fisher', 'History, Survival', '+1 Any', 'Fishing tackle, a net, a favorite fishing lure or oiled leather wading boots, a set of traveler"s clothes, and a belt pouch containing 10 gp'),
('Acolyte', 'Insight, Religion', '+2 Any', 'A holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a belt pouch containing 15 gp'),
('Criminal', 'Deception, Stealth', '0', 'A crowbar, a set of dark common clothes including a hood, and a belt pouch containing 15 gp');
insert into "spells" ("spell", "lvl", "type", "description")
values ('Fireball', '3rd', 'evocation', 'A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren’t being worn or carried.');
-- insert into "characters" ("name", "class", "race", "background","str","dex","con","wis","int","cha", "level")
-- values ('kris', 'pally', 'human', 'wanderer',1,2,3,4,5,6,1),
-- ('bob', 'Ranger', 'elf', 'thief',1,2,3,4,5,6,1);
insert into "proficencies" ("name")
values ('acrobatics'),
('animal handling'),
('arcana'),
('athletics'),
('deception'),
('history'),
('insight'),
('intimidation'),
('investigation'),
('medicine'),
('nature'),
('perception'),
('performance'),
('persuasion'),
('religion'),
('sleight of hand'),
('stealth'),
('survival');
