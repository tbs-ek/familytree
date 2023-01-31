// THE BIG ARRAY WITH EVERY SISTER'S DATA
// The big array contains one associative array {} for each sister
// Each associative array has the following key-value pairs: "name", "class", "active", "parent"
// some of the later classes also have "bio" key-value pairs
// but the code that adds bios to the nodes doesn't seem to work
// ALL YOU HAVE TO DO is add in the latest class of candidates,
// denote non-actives by changing the “active” attribute to “n”,
// and update the candidate class year/letters under nodeUpdate.select("circle")


var data = [

  { "name": "Epsilon Kappa",          "class": "1973",  "active": "n", "parent": "null" },

  // Omega 1996 Ω
	{"name": "Eloise Marquez",            "class": "1996 Ω", "active": "n", "parent": "Epsilon Kappa" }, 
	{"name": "Samantha Ivers",            "class": "1996 Ω", "active": "n", "parent": "Epsilon Kappa" },

  // Alpha Alpha 1997 AA
 	{"name": "Jacqueline Henderson",            "class": "1997 AA", "active": "n", "parent": "Epsilon Kappa" },

  // Alpha Beta 1998 AB
	{"name": "Stephanie Anne Haygood",        "class": "1998 AB", "active": "n", "parent": "Eloise Marquez" },
	{"name": "Kristin Chong",        "class": "1998 AB", "active": "n", "parent": "Jacqueline Henderson" },
	{"name": "Kristin Madsen",        "class": "1998 AB", "active": "n", "parent": "Epsilon Kappa" },
	{"name": "Hilary Douglas",        "class": "1998 AB", "active": "n", "parent": "Samantha Ivers" },
	{"name": "Katherine Jankaew",        "class": "1998 AB", "active": "n", "parent": "Epsilon Kappa" },

  // Alpha Gamma 1999 AΓ
	{"name": "Jessmyn Jones",             "class": "1999 AΓ", "active": "n", "parent": "Stephanie Anne Haygood" },
	{"name": "Alyssa White",             "class": "1999 AΓ", "active": "n", "parent": "Kristin Chong" },
	{"name": "Anne Marie Selaya",             "class": "1999 AΓ", "active": "n", "parent": "Epsilon Kappa" },
	{"name": "Marissa Spokes",             "class": "1999 AΓ", "active": "n", "parent": "Hilary Douglas" },
	{"name": "Sarah Neiss",             "class": "1999 AΓ", "active": "n", "parent": "Katherine Jankaew" },

  // Alpha Delta 2000 AΔ
	{"name": "Allison Painter",        "class": "2000 AΔ", "active": "n", "parent": "Stephanie Anne Haygood" },
	{"name": "Melissa Waldie",        "class": "2000 AΔ", "active": "n", "parent": "Jessmyn Jones" },
	{"name": "Brieanne Martin",        "class": "2000 AΔ", "active": "n", "parent": "Alyssa White" },
	{"name": "Alison Dyer",        "class": "2000 AΔ", "active": "n", "parent": "Anne Marie Selaya" },
	{"name": "Andrea Giraldo",        "class": "2000 AΔ", "active": "n", "parent": "Epsilon Kappa" },
	{"name": "Heather Jacobs",        "class": "2000 AΔ", "active": "n", "parent": "Kristin Madsen" },
	{"name": "Brooke Wilson",        "class": "2000 AΔ", "active": "n", "parent": "Katherine Jankaew" },
	{"name": "Emily Dodges",        "class": "2000 AΔ", "active": "n", "parent": "Sarah Neiss" },

  // Alpha Epsilon 2001 AE
	{"name": "Rebecca L. Panman",         "class": "2001 AE", "active": "n", "parent": "Stephanie Anne Haygood" },
	{"name": "Lauren Bower Jordan",         "class": "2001 AE", "active": "n", "parent": "Allison Painter" },
	{"name": "Vasiliki Garrett",         "class": "2001 AE", "active": "n", "parent": "Alyssa White" },
	{"name": "Trista Chan",         "class": "2001 AE", "active": "n", "parent": "Alison Dyer" },
	{"name": "Lucinda Martinez",         "class": "2001 AE", "active": "n", "parent": "Andrea Giraldo" },
	{"name": "Giana Knight",         "class": "2001 AE", "active": "n", "parent": "Marissa Spokes" },
	{"name": "Molly B. Jewett",         "class": "2001 AE", "active": "n", "parent": "Brooke Wilson" },

  //Alpha Zeta 2002 AZ
	{"name": "Jennifer Kubit",        "class": "2002 AZ", "active": "n", "parent": "Melissa Waldie" },
	{"name": "Kathleen Chiu",        "class": "2002 AZ", "active": "n", "parent": "Melissa Waldie" },
	{"name": "Jenny Groenenboom",        "class": "2002 AZ", "active": "n", "parent": "Lauren Bower Jordan" },
	{"name": "Pam Conder",        "class": "2002 AZ", "active": "n", "parent": "Rebecca L. Panman" },
	{"name": "Bonnie Marinacci",        "class": "2002 AZ", "active": "n", "parent": "Vasiliki Garrett" },
	{"name": "Fatima Dela Cruz Sim",        "class": "2002 AZ", "active": "n", "parent": "Alison Dyer" },
	{"name": "Lisa Coyne",        "class": "2002 AZ", "active": "n", "parent": "Lucinda Martinez" },
	{"name": "Leslie Chan",        "class": "2002 AZ", "active": "n", "parent": "Epsilon Kappa" },
	{"name": "Ashley Bonner-Lyon",        "class": "2002 AZ", "active": "n", "parent": "Heather Jacobs" },
	{"name": "Jennifer Thomasian",        "class": "2002 AZ", "active": "n", "parent": "Emily Dodges" },

  // Alpha Eta 2003 AH
	{"name": "Jessica Yehling",        "class": "2003 AH", "active": "n", "parent": "Melissa Waldie" },
	{"name": "Pamela Felix",        "class": "2003 AH", "active": "n", "parent": "Melissa Waldie" },
	{"name": "Pamela Zai",        "class": "2003 AH", "active": "n", "parent": "Lauren Bower Jordan" },
	{"name": "Alexis Derrington",        "class": "2003 AH", "active": "n", "parent": "Pam Conder" },
	{"name": "Justine Chen",        "class": "2003 AH", "active": "n", "parent": "Vasiliki Garrett" },
	{"name": "Marina Alburger",        "class": "2003 AH", "active": "n", "parent": "Bonnie Marinacci" },
	{"name": "Elizabeth Stephenson",        "class": "2003 AH", "active": "n", "parent": "Fatima Dela Cruz Sim" },
	{"name": "Michelle Lee Badilla",        "class": "2003 AH", "active": "n", "parent": "Trista Chan" },
	{"name": "Selena Spaniel",        "class": "2003 AH", "active": "n", "parent": "Alison Dyer" },
	{"name": "Nicole (Ries) McCormick",        "class": "2003 AH", "active": "n", "parent": "Lisa Coyne" },
	{"name": "Rosemarie Lerma",        "class": "2003 AH", "active": "n", "parent": "Lucinda Martinez" },
	{"name": "Melanie Dahl",        "class": "2003 AH", "active": "n", "parent": "Lucinda Martinez" },
	{"name": "Katie (Hanson) Millsom",        "class": "2003 AH", "active": "n", "parent": "Leslie Chan" },
	{"name": "Dawn Barton",        "class": "2003 AH", "active": "n", "parent": "Ashley Bonner-Lyon" },
	{"name": "Rebecca Claasen",        "class": "2003 AH", "active": "n", "parent": "Heather Jacobs" },
	{"name": "Sarah Bunting",        "class": "2003 AH", "active": "n", "parent": "Epsilon Kappa" },
	{"name": "Faeron Meldrum-Taylor",        "class": "2003 AH", "active": "n", "parent": "Epsilon Kappa" },
	{"name": "Sandra Degive",        "class": "2003 AH", "active": "n", "parent": "Molly B. Jewett" },
	{"name": "Laura Dawson",        "class": "2003 AH", "active": "n", "parent": "Jennifer Thomasian" },
	{"name": "Gilda Barboza",        "class": "2003 AH", "active": "n", "parent": "Emily Dodges" },

  //Alpha Theta 2004 AΘ
	{"name": "Hilary Strong",        "class": "2004 AΘ", "active": "n", "parent": "Jessica Yehling" },
	{"name": "Judy Chan",        "class": "2004 AΘ", "active": "n", "parent": "Marina Alburger" },
	{"name": "Jennifer Von Dran",        "class": "2004 AΘ", "active": "n", "parent": "Fatima Dela Cruz Sim" },
	{"name": "Megan Fay",        "class": "2004 AΘ", "active": "n", "parent": "Selena Spaniel" },
	{"name": "Kristen Silverberg",        "class": "2004 AΘ", "active": "n", "parent": "Nicole (Ries) McCormick" },
	{"name": "Marina Marquez",        "class": "2004 AΘ", "active": "n", "parent": "Lisa Coyne" },
	{"name": "Kristen Parnell",        "class": "2004 AΘ", "active": "n", "parent": "Melanie Dahl" },
	{"name": "Amy Kwan",        "class": "2004 AΘ", "active": "n", "parent": "Katie (Hanson) Millsom" },
	{"name": "Cassie Fay Harris",        "class": "2004 AΘ", "active": "n", "parent": "Dawn Barton" },
	{"name": "Jennifer Comstock",        "class": "2004 AΘ", "active": "n", "parent": "Faeron Meldrum-Taylor" },

  //Alpha Iota 2005 AI
	{"name": "Stephanie Tashiro",        "class": "2005 AI", "active": "n", "parent": "Hilary Strong" },
	{"name": "VanLin Chan",        "class": "2005 AI", "active": "n", "parent": "Alexis Derrington" },
	{"name": "Mary Anne Schmitt",        "class": "2005 AI", "active": "n", "parent": "Jennifer Von Dran" },
	{"name": "Caitlin Nunn",        "class": "2005 AI", "active": "n", "parent": "Selena Spaniel" },
	{"name": "Katie Wolf",        "class": "2005 AI", "active": "n", "parent": "Lisa Coyne" },
	{"name": "Emma Sanford",        "class": "2005 AI", "active": "n", "parent": "Nicole (Ries) McCormick" },
	{"name": "Jacqueline Ellis",        "class": "2005 AI", "active": "n", "parent": "Kristen Silverberg" },
	{"name": "Jumy Chan",        "class": "2005 AI", "active": "n", "parent": "Jennifer Dela Cruz Sim" },

  //Alpha Kappa 2006 AK
	{"name": "Emily Elftman",        "class": "2006 AK", "active": "n", "parent": "Hilary Strong" },
	{"name": "Tracy Vahle",        "class": "2006 AK", "active": "n", "parent": "Stephanie Tashiro" },
	{"name": "Julie Cozen-Harel",        "class": "2006 AK", "active": "n", "parent": "VanLin Chan" },
	{"name": "Aditi Gobburu",        "class": "2006 AK", "active": "n", "parent": "Elizabeth Stephenson" },
	{"name": "Sarah Chan",        "class": "2006 AK", "active": "n", "parent": "Mary Anne Schmitt" },
	{"name": "Michelle Juarez",        "class": "2006 AK", "active": "n", "parent": "Caitlin Nunn" },
	{"name": "June Pai",        "class": "2006 AK", "active": "n", "parent": "Nicole (Ries) McCormick" },
	{"name": "Marie Schmidt",        "class": "2006 AK", "active": "n", "parent": "Emma Sanford" },
	{"name": "Heather Peterson",        "class": "2006 AK", "active": "n", "parent": "Kristen Silverberg" },
	{"name": "Mary Emfinger",        "class": "2006 AK", "active": "n", "parent": "Jacqueline Ellis" },
	{"name": "Stephanie Cash",        "class": "2006 AK", "active": "n", "parent": "Amy Kwan" },
	{"name": "Holly Hunter",        "class": "2006 AK", "active": "n", "parent": "Epsilon Kappa" },
	{"name": "Cynthia Scott",        "class": "2006 AK", "active": "n", "parent": "Rebecca Claasen" },
	{"name": "Nadya Seal",        "class": "2006 AK", "active": "n", "parent": "Epsilon Kappa" },

  //Alpha Lambda 2007 AΛ
	{"name": "Catherine Lindsay",        "class": "2007 AΛ", "active": "n", "parent": "Emily Elftman" },
	{"name": "Danae Paterson",        "class": "2007 AΛ", "active": "n", "parent": "Tracy Vahle" },
	{"name": "Vanessa Houseman",        "class": "2007 AΛ", "active": "n", "parent": "Stephanie Tashiro" },
	{"name": "Helen Cordova",        "class": "2007 AΛ", "active": "n", "parent": "Julie Cozen-Harel" },
	{"name": "Shelley Patel",        "class": "2007 AΛ", "active": "n", "parent": "VanLin Chan" },
	{"name": "Rosie Rice",        "class": "2007 AΛ", "active": "n", "parent": "Aditi Gobburu" },
	{"name": "Kelly Spiva",        "class": "2007 AΛ", "active": "n", "parent": "Mary Anne Schmitt" },
	{"name": "Mary Jewett",        "class": "2007 AΛ", "active": "n", "parent": "Caitlin Nunn" },
	{"name": "Anthony Barbir",        "class": "2007 AΛ", "active": "n", "parent": "Megan Fay" },
	{"name": "Juliet Lee",        "class": "2007 AΛ", "active": "n", "parent": "Katie Wolf" },
	{"name": "Erin Cubbon",        "class": "2007 AΛ", "active": "n", "parent": "Marie Schmidt" },
	{"name": "Sarah Young",        "class": "2007 AΛ", "active": "n", "parent": "Kristen Silverberg" },
	{"name": "Bianca Shulaker",        "class": "2007 AΛ", "active": "n", "parent": "Jacqueline Ellis" },
	{"name": "Natasha Feier",        "class": "2007 AΛ", "active": "n", "parent": "Mary Emfinger" },
	{"name": "Tootie Merchant",        "class": "2007 AΛ", "active": "n", "parent": "Cynthia Scott" },
	{"name": "Margarete Krick",        "class": "2007 AΛ", "active": "n", "parent": "Jennifer Comstock" },
	{"name": "Natalie Jones",        "class": "2007 AΛ", "active": "n", "parent": "Nadya Seal" },

  //Alpha Mu 2008 AM
	{"name": "Ashley McFadden",        "class": "2008 AM", "active": "n", "parent": "Vanessa Houseman" },
	{"name": "Kristen Torres",        "class": "2008 AM", "active": "n", "parent": "Helen Cordova" },
	{"name": "Helen Durand",        "class": "2008 AM", "active": "n", "parent": "Shelley Patel" },
	{"name": "Sarah Dressler",        "class": "2008 AM", "active": "n", "parent": "Kelly Spiva" },
	{"name": "Nicole Hall",        "class": "2008 AM", "active": "n", "parent": "Sarah Young" },
	{"name": "Betsy Bentler",        "class": "2008 AM", "active": "n", "parent": "Bianca Shulaker" },
	{"name": "Krystina Johnson",        "class": "2008 AM", "active": "n", "parent": "Natasha Feier" },
	{"name": "Rachel Goldman",        "class": "2008 AM", "active": "n", "parent": "Tootie Merchant" },

  //Alpha Nu 2009 AN
	{"name": "Ellen Dempsey",        "class": "2009 AN", "active": "n", "parent": "Catherine Lindsay" },
	{"name": "Rebecca Toda",        "class": "2009 AN", "active": "n", "parent": "Danae Paterson" },
	{"name": "Marlee Newman",        "class": "2009 AN", "active": "n", "parent": "Ashley McFadden" },
	{"name": "Elizabeth Schleder",        "class": "2009 AN", "active": "n", "parent": "Sarah Young" },
	{"name": "Anna Schmahl",        "class": "2009 AN", "active": "n", "parent": "Krystina Johnson" },
	{"name": "Arit John",        "class": "2009 AN", "active": "n", "parent": "Rachel Goldman" },

  //Alpha Xi 2010 AΞ
	{"name": "Amanda Michael",        "class": "2010 AΞ", "active": "n", "parent": "Ashley McFadden" },
	{"name": "Justin Grant",        "class": "2010 AΞ", "active": "n", "parent": "Helen Cordova" },
	{"name": "Nathalie Ferare",        "class": "2010 AΞ", "active": "n", "parent": "Helen Durand" },
	{"name": "Allison Gill",        "class": "2010 AΞ", "active": "n", "parent": "Sarah Dressler" },
	{"name": "Lauren McWorter",        "class": "2010 AΞ", "active": "n", "parent": "Anthony Barbir" },
	{"name": "Katie Due",        "class": "2010 AΞ", "active": "n", "parent": "Elizabeth Schleder" },
	{"name": "Keri Downs",        "class": "2010 AΞ", "active": "n", "parent": "Betsy Bentler" },
	{"name": "Sarah Cox",        "class": "2010 AΞ", "active": "n", "parent": "Anna Schmahl" },

  //Alpha Omicron 2011 AO
	{"name": "Nastaisha Allen",        "class": "2011 AO", "active": "n", "parent": "Arit John" },
	{"name": "Phil Caltabiano",        "class": "2011 AO", "active": "n", "parent": "Epsilon Kappa" },
	{"name": "Cindy Chavez",        "class": "2011 AO", "active": "n", "parent": "Rachel Goldman" },
	{"name": "Guillermo Cisneros, Jr.",        "class": "2011 AO", "active": "n", "parent": "Sarah Cox" },
	{"name": "Aurora Garcia",        "class": "2011 AO", "active": "n", "parent": "Lauren McWorter" },
	{"name": "Kaylee Griffith",        "class": "2011 AO", "active": "n", "parent": "Marlee Newman" },
	{"name": "Andrea Guzman",        "class": "2011 AO", "active": "n", "parent": "Allison Gill" },
	{"name": "Robyn Kamp",        "class": "2011 AO", "active": "n", "parent": "Lauren McWorter" },
	{"name": "Hanna Kim",        "class": "2011 AO", "active": "n", "parent": "Nathalie Ferare" },
	{"name": "Alyssa Lee",        "class": "2011 AO", "active": "n", "parent": "Sarah Cox" },
	{"name": "Melanie Lim",        "class": "2011 AO", "active": "n", "parent": "Katie Due" },
	{"name": "Micah Shaw",        "class": "2011 AO", "active": "n", "parent": "Rebecca Toda" },
	{"name": "Audrey Urrutia",        "class": "2011 AO", "active": "n", "parent": "Katie Due" },

  //Alpha Pi 2012 AΠ
	{"name": "Julia Aguilar",        "class": "2012 AΠ ", "active": "n", "parent": "Cindy Chavez" },
	{"name": "Emily Crook",        "class": "2012 AΠ ", "active": "n", "parent": "Guillermo Cisneros, Jr." },
	{"name": "Jing Feng",        "class": "2012 AΠ ", "active": "n", "parent": "Kaylee Griffith" },
	{"name": "Anthony Huerta",        "class": "2012 AΠ ", "active": "n", "parent": "Andrea Guzman" },
	{"name": "Lauren Labac",        "class": "2012 AΠ ", "active": "n", "parent": "Audrey Urrutia" },
	{"name": "Jessica Leatherman",        "class": "2012 AΠ ", "active": "n", "parent": "Robyn Kamp" },
	{"name": "Michael Mehlberg",        "class": "2012 AΠ ", "active": "n", "parent": "Kaylee Griffith" },
	{"name": "Natalia Pfaff",        "class": "2012 AΠ ", "active": "n", "parent": "Phil Caltabiano" },
	{"name": "Lauren Sevigny",        "class": "2012 AΠ ", "active": "n", "parent": "Phil Caltabiano" },
	{"name": "Rebecca Sousa",        "class": "2012 AΠ ", "active": "n", "parent": "Micah Shaw" },
	{"name": "Meghan Truax",        "class": "2012 AΠ ", "active": "n", "parent": "Alyssa Lee" },
	{"name": "Mandy Wong",        "class": "2012 AΠ ", "active": "n", "parent": "Melanie Lim" },
	{"name": "May Zhang",        "class": "2012 AΠ ", "active": "n", "parent": "Nastaisha Allen" },

  //Alpha Rho 2013 AP
	{"name": "Christine Canilao",        "class": "2013 AP", "active": "n", "parent": "Lauren Sevigny", "bio": "" },
	{"name": "Brenna Gibbs",        "class": "2013 AP", "active": "n", "parent": "Melanie Lim", "bio": "" },
	{"name": "ReJoyce Green",        "class": "2013 AP", "active": "n", "parent": "Emily Crook", "bio": "" },
	{"name": "Michael Jedynak",        "class": "2013 AP", "active": "n", "parent": "May Zhang", "bio": "" },
	{"name": "Joanna Marshall",        "class": "2013 AP", "active": "n", "parent": "Meghan Truax", "bio": "" },
	{"name": "Ali Abele",        "class": "2013 AP", "active": "n", "parent": "Hanna Kim", "bio": "http://www.tbsek.org/sisters/ali-abele" },
	{"name": "Sydney Dychiao",        "class": "2013 AP", "active": "n", "parent": "Mandy Wong", "bio": "http://www.tbsek.org/sisters/sydney-dychiao" },
	{"name": "Danielle Jung",        "class": "2013 AP", "active": "n", "parent": "Keri Downs", "bio": "http://www.tbsek.org/sisters/danielle-jung" },
	{"name": "Satkartar Khalsa",        "class": "2013 AP", "active": "n", "parent": "Jessica Leatherman", "bio": "http://www.tbsek.org/sisters/satkartar-khalsa" },
	{"name": "Vivian Liao",        "class": "2013 AP", "active": "n", "parent": "Rebecca Sousa", "bio": "http://www.tbsek.org/sisters/vivian-liao" },
	{"name": "Carrie Meza",        "class": "2013 AP", "active": "n", "parent": "Michael Mehlberg", "bio": "http://www.tbsek.org/sisters/carrie-meza" },
	{"name": "Alex Nguyen",        "class": "2013 AP", "active": "n", "parent": "Aurora Garcia", "bio": "http://www.tbsek.org/sisters/alex-nguyen" },
	{"name": "Christopher Torres",        "class": "2013 AP", "active": "n", "parent": "Anthony Huerta", "bio": "http://www.tbsek.org/sisters/christopher-torres" },
	{"name": "Teresa Urrutia",        "class": "2013 AP", "active": "n", "parent": "May Zhang", "bio": "http://www.tbsek.org/sisters/teresa-urrutia" },

  //Alpha Sigma 2014 AΣ
	{"name": "Georgina Morones",        "class": "2014 AΣ", "active": "n", "parent": "Jessica Leatherman", "bio": "" },
	{"name": "Katie Morrett",        "class": "2014 AΣ", "active": "n", "parent": "Hanna Kim", "bio": "" },
	{"name": "Kiyo Kanauchi",        "class": "2014 AΣ", "active": "n", "parent": "Christine Canilao", "bio": "" },
	{"name": "Angie Wang",        "class": "2014 AΣ", "active": "n", "parent": "Sydney Dychiao", "bio": "" },
	{"name": "Allison Daniel",        "class": "2014 AΣ", "active": "n", "parent": "Danielle Jung", "bio": "http://www.tbsek.org/sisters/allison-daniel" },
	{"name": "Giselle Guillen",        "class": "2014 AΣ", "active": "n", "parent": "Carrie Meza", "bio": "http://www.tbsek.org/sisters/giselle-guillen" },
	{"name": "Samantha Hamed",        "class": "2014 AΣ", "active": "n", "parent": "Julia Aguilar", "bio": "http://www.tbsek.org/sisters/samantha-hamed" },
	{"name": "Liana Kindler",        "class": "2014 AΣ", "active": "n", "parent": "Ali Abele", "bio": "http://www.tbsek.org/sisters/liana-kindler" },
	{"name": "Andrea Madrigal",        "class": "2014 AΣ", "active": "n", "parent": "Christopher Torres", "bio": "http://www.tbsek.org/sisters/andrea-madrigal" },
	{"name": "Shannon Miner",        "class": "2014 AΣ", "active": "n", "parent": "Satkartar Khalsa", "bio": "http://www.tbsek.org/sisters/shannon-miner" },
	{"name": "Victoria Tao",        "class": "2014 AΣ", "active": "n", "parent": "Christine Canilao", "bio": "http://www.tbsek.org/sisters/victoria-tao" },
	{"name": "Jose Velasquez",        "class": "2014 AΣ", "active": "n", "parent": "Alex Nguyen", "bio": "http://www.tbsek.org/sisters/jose-velasquez" },
	{"name": "Bryce Wong",        "class": "2014 AΣ", "active": "n", "parent": "Vivian Liao", "bio": "http://www.tbsek.org/sisters/bryce-wong" },

  //Alpha Tau 2015 AT
	{"name": "Bob Brusch",        "class": "2015 AT", "active": "n", "parent": "Victoria Tao", "bio": "http://www.tbsek.org/sisters/bob-brusch" },
	{"name": "Ileana Callejas",        "class": "2015 AT", "active": "n", "parent": "Giselle Guillen", "bio": "http://www.tbsek.org/sisters/ileana-callejas" },
	{"name": "Susana Carlos",        "class": "2015 AT", "active": "n", "parent": "Andrea Madrigal", "bio": "http://www.tbsek.org/sisters/susana-carlos" },
	{"name": "Samantha Chavez",        "class": "2015 AT", "active": "n", "parent": "Carrie Meza", "bio": "http://www.tbsek.org/sisters/samantha-chavez" },
	{"name": "Jessica Fallon",        "class": "2015 AT", "active": "n", "parent": "Allison Daniel", "bio": "http://www.tbsek.org/sisters/jessica-fallon" },
	{"name": "Anna Hubel",        "class": "2015 AT", "active": "n", "parent": "Teresa Urrutia", "bio": "http://www.tbsek.org/sisters/anna-hubel" },
	{"name": "Jenny Lindell",        "class": "2015 AT", "active": "n", "parent": "Samantha Hamed", "bio": "http://www.tbsek.org/sisters/jenny-lindell" },
	{"name": "Alejandra Morales", "class": "2015 AT", "active": "n", "parent": "Georgina Morones", "bio": "http://www.tbsek.org/sisters/alejandra-morales" },
	{"name": "Sara Mosgrove",        "class": "2015 AT", "active": "n", "parent": "Shannon Miner", "bio": "http://www.tbsek.org/sisters/sara-mosgrove" },
	{"name": "Angelica Rodriguez",        "class": "2015 AT", "active": "n", "parent": "Sydney Dychiao", "bio": "http://www.tbsek.org/sisters/angelica-rodriguez" },
	{"name": "Grant Schulte",        "class": "2015 AT", "active": "n", "parent": "Angie Wang", "bio": "http://www.tbsek.org/sisters/grant-schulte" },
	{"name": "Thomas Smith",        "class": "2015 AT", "active": "n", "parent": "Meghan Truax", "bio": "http://www.tbsek.org/sisters/thomas-smith" },
	{"name": "Shayna Warner",        "class": "2015 AT", "active": "n", "parent": "Bryce Wong", "bio": "http://www.tbsek.org/sisters/shayna-warner" },
	{"name": "Theo Wu",        "class": "2015 AT", "active": "n", "parent": "Jose Velasquez", "bio": "http://www.tbsek.org/sisters/theo-wu"},

  //Alpha Upsilon 2016 AY
	{"name": "Emily Tsai",        "class": "2016 AY", "active": "n", "parent": "Theo Wu", "bio": "http://www.tbsek.org/sisters/emily-tsai"},
	{"name": "Sharla Barlan",        "class": "2016 AY", "active": "n", "parent": "Liana Kindler", "bio": "http://www.tbsek.org/sisters/sharla-barlan"},
	{"name": "Connie Chen",        "class": "2016 AY", "active": "n", "parent": "Ali Abele", "bio": "http://www.tbsek.org/sisters/connie-chen"},
	{"name": "Kathleen Oliphant",        "class": "2016 AY", "active": "n", "parent": "Susana Carlos", "bio": "http://www.tbsek.org/sisters/kathleen-oliphant"},
	{"name": "Hannah Markovic",        "class": "2016 AY", "active": "n", "parent": "Angelica Rodriguez", "bio": "http://www.tbsek.org/sisters/hannah-markovic"},
	{"name": "Kaitlyn Watkins",        "class": "2016 AY", "active": "n", "parent": "Samantha Chavez", "bio": "http://www.tbsek.org/sisters/kaitlyn-watkins"},
	{"name": "Kayleigh Hart",        "class": "2016 AY", "active": "n", "parent": "Jenny Lindell", "bio": "http://www.tbsek.org/sisters/kayleigh-hart"},
	{"name": "Laila Sathe",        "class": "2016 AY", "active": "n", "parent": "Sara Mosgrove", "bio": "http://www.tbsek.org/sisters/laila-sathe-2"},
	{"name": "Jareni Cristina Polanco",        "class": "2016 AY", "active": "n", "parent": "Shayna Warner", "bio": "http://www.tbsek.org/sisters/laila-sathe"},
	{"name": "Mariah Tumbaga",        "class": "2016 AY", "active": "n", "parent": "Alejandra Morales", "bio": "http://www.tbsek.org/sisters/mariah-tumbaga"},
	{"name": "Shannon D'Ambrosio",        "class": "2016 AY", "active": "n", "parent": "Jessica Fallon", "bio": "http://www.tbsek.org/sisters/shannon-dambrosio"},
	{"name": "Chemil Lache Durant",        "class": "2016 AY", "active": "n", "parent": "Ileana Callejas", "bio": "http://www.tbsek.org/sisters/chemil-lache-durant"},
	{"name": "Tesslyn Knapp",        "class": "2016 AY", "active": "n", "parent": "Anna Hubel", "bio": "http://www.tbsek.org/sisters/tesslyn-knapp"},
	{"name": "Daven-Anthony Lagman",        "class": "2016 AY", "active": "n", "parent": "Thomas Smith", "bio": "http://www.tbsek.org/sisters/daven-anthony-lagman"},

  //Alpha Phi 2017 AΦ
	{"name": "Alexa Camacho Sanchez",        "class": "2017 AΦ", "active": "n", "parent": "Mariah Tumbaga"},
	{"name": "Angel Coronado",        "class": "2017 AΦ", "active": "n", "parent": "Daven-Anthony Lagman"},
	{"name": "Chris Calles",        "class": "2017 AΦ", "active": "n", "parent": "Theo Wu"},
	{"name": "Christian Zarzosa",        "class": "2017 AΦ", "active": "n", "parent": "Andrea Madrigal"},
	{"name": "Claire Locke",        "class": "2017 AΦ", "active": "n", "parent": "Angelica Rodriguez"},
	{"name": "Delacey Rodriguez",        "class": "2017 AΦ", "active": "n", "parent": "Bryce Wong"},
	{"name": "Delaney Proudfoot",        "class": "2017 AΦ", "active": "n", "parent": "Emily Tsai"},
	{"name": "Martin Trang",        "class": "2017 AΦ", "active": "n", "parent": "Emily Tsai"},
	{"name": "Emma Suchard",        "class": "2017 AΦ", "active": "n", "parent": "Connie Chen"},
	{"name": "Jordan Briggs",        "class": "2017 AΦ", "active": "n", "parent": "Kayleigh Hart"},
	{"name": "Marcus Veal",        "class": "2017 AΦ", "active": "n", "parent": "Kayleigh Hart"},
	{"name": "Julianne Zingmond",        "class": "2017 AΦ", "active": "n", "parent": "Kathleen Oliphant"},
	{"name": "Cheyenne Suzukawa",        "class": "2017 AΦ", "active": "n", "parent": "Kathleen Oliphant"},
	{"name": "Kelly Flood",        "class": "2017 AΦ", "active": "n", "parent": "Shannon D'Ambrosio"},
	{"name": "Kelly Vines",        "class": "2017 AΦ", "active": "n", "parent": "Sharla Barlan"},
	{"name": "Kyle Reidy",        "class": "2017 AΦ", "active": "n", "parent": "Jareni Cristina Polanco"},
	{"name": "Malia Smith",        "class": "2017 AΦ", "active": "n", "parent": "Chemil Lache Durant"},
	{"name": "Natalie Aranda",        "class": "2017 AΦ", "active": "n", "parent": "Tesslyn Knapp"},
	{"name": "Alexis Elliot",        "class": "2017 AΦ", "active": "n", "parent": "Tesslyn Knapp"},
	{"name": "Nique Stumbaugh",        "class": "2017 AΦ", "active": "n", "parent": "Thomas Smith"},
	{"name": "Owen Saites",        "class": "2017 AΦ", "active": "n", "parent": "Jose Velasquez"},
	{"name": "Sarah Jensen",        "class": "2017 AΦ", "active": "n", "parent": "Kaitlyn Watkins"},
	{"name": "Sarah Truax",        "class": "2017 AΦ", "active": "n", "parent": "Kaitlyn Watkins"},
	{"name": "Shelby Olson",        "class": "2017 AΦ", "active": "n", "parent": "Laila Sathe"},
	{"name": "Simon Kapler",        "class": "2017 AΦ", "active": "n", "parent": "Liana Kindler"},
	{"name": "Spencer Chau",        "class": "2017 AΦ", "active": "n", "parent": "Susana Carlos"},
	{"name": "Steven Candelaria",        "class": "2017 AΦ", "active": "n", "parent": "Bob Brusch"},
	{"name": "Tabetha Van Heest",        "class": "2017 AΦ", "active": "n", "parent": "Samantha Hamed"},
	{"name": "Talia Fossa",        "class": "2017 AΦ", "active": "n", "parent": "Hannah Markovic"},

  //Alpha Chi 2018 AΧ
	{"name": "Andy Nguyen",        "class": "2018 AΧ", "active": "n", "parent": "Sarah Jensen"},
	{"name": "Aylin Henstridge",        "class": "2018 AΧ", "active": "n", "parent": "Natalie Aranda"},
	{"name": "Collin Lantz",        "class": "2018 AΧ", "active": "n", "parent": "Martin Trang"},
	{"name": "Daniela Hernandez",        "class": "2018 AΧ", "active": "n", "parent": "Kelly Flood"},
	{"name": "Emma Atkins",        "class": "2018 AΧ", "active": "n", "parent": "Tabetha Van Heest"},
	{"name": "Ethan Brandt",        "class": "2018 AΧ", "active": "n", "parent": "Emma Suchard"},
	{"name": "Jaquelyn Panaro",        "class": "2018 AΧ", "active": "n", "parent": "Nique Stumbaugh"},
	{"name": "James Eichenbaum",        "class": "2018 AΧ", "active": "n", "parent": "Shelby Olson"},
	{"name": "Jana Boksan",        "class": "2018 AΧ", "active": "n", "parent": "Jordan Briggs"},
	{"name": "Jazmine Stringfellow",        "class": "2018 AΧ", "active": "n", "parent": "Alexa Camacho Sanchez"},
	{"name": "Kerianne Brennan",        "class": "2018 AΧ", "active": "n", "parent": "Julianne Zingmond"},
	{"name": "Leo Pfeiffer",        "class": "2018 AΧ", "active": "n", "parent": "Owen Saites"},
	{"name": "Nathan Culcasi",        "class": "2018 AΧ", "active": "n", "parent": "Marcus Veal"},
	{"name": "Phoebe Miller",        "class": "2018 AΧ", "active": "n", "parent": "Angel Coronado"},
	{"name": "Sam Clark",        "class": "2018 AΧ", "active": "n", "parent": "Kelly Vines"},
	{"name": "Siobhan Chapman",        "class": "2018 AΧ", "active": "n", "parent": "Kyle Reidy"},
	{"name": "Tom Condon",        "class": "2018 AΧ", "active": "n", "parent": "Chris Calles"},
	{"name": "Jeremy Huang",        "class": "2018 AΧ", "active": "n", "parent": "Steven Candelaria"},

  //Alpha Psi 2019 AΨ
	{"name": "Amber Tien",        "class": "2019 AΨ", "active": "n", "parent": "Siobhan Chapman"},
	{"name": "Annabel Li",        "class": "2019 AΨ", "active": "n", "parent": "Marcus Veal"},
	{"name": "Ashley Arellano",        "class": "2019 AΨ", "active": "n", "parent": "Delacey Rodriguez"},
	{"name": "Blanca Carla Arriaga",        "class": "2019 AΨ", "active": "n", "parent": "Cheyenne Suzukawa"},
	{"name": "Diana Greenwood",        "class": "2019 AΨ", "active": "n", "parent": "Delaney Proudfoot"},
	{"name": "Elizabeth Gallmeister",        "class": "2019 AΨ", "active": "n", "parent": "Claire Locke"},
	{"name": "Ethan Kim",        "class": "2019 AΨ", "active": "n", "parent": "Jeremy Huang"},
	{"name": "Isaac Boris",        "class": "2019 AΨ", "active": "n", "parent": "Phoebe Miller"},
	{"name": "Jazmin Aguila",        "class": "2019 AΨ", "active": "n", "parent": "Daniela Hernandez"},
	{"name": "Johnny Urosevic",        "class": "2019 AΨ", "active": "n", "parent": "Collin Lantz"},
	{"name": "Justin Cole",        "class": "2019 AΨ", "active": "n", "parent": "Leo Pfeiffer"},
	{"name": "Madelyn Armes",        "class": "2019 AΨ", "active": "n", "parent": "Kerianne Brennan"},
	{"name": "Makailah Hernandez",        "class": "2019 AΨ", "active": "n", "parent": "Jaquelyn Panaro"},
	{"name": "Melissa Perrin",        "class": "2019 AΨ", "active": "n", "parent": "Jana Boksan"},
	{"name": "Natasha Rodriguez",        "class": "2019 AΨ", "active": "n", "parent": "Emma Atkins"},
	{"name": "Paolo Gaudiel",        "class": "2019 AΨ", "active": "n", "parent": "Andy Nguyen"},
	{"name": "Shruti Indiresan",        "class": "2019 AΨ", "active": "n", "parent": "Aylin Henstridge"},
	{"name": "Sierra Talbert",        "class": "2019 AΨ", "active": "n", "parent": "James Eichenbaum"},
	{"name": "Yahaira Cortez",        "class": "2019 AΨ", "active": "n", "parent": "Alexis Elliot"},

  //Alpha Omega 2020 AΩ
	{"name": "Cecilia Luisa Porras",        "class": "2020 AΩ", "active": "y", "parent": "Shruti Indiresan"},
	{"name": "Deborah Gallego",        "class": "2020 AΩ", "active": "y", "parent": "Jazmin Aguila"},
	{"name": "Elija Balanga",        "class": "2020 AΩ", "active": "n", "parent": "Andy Nguyen"},
	{"name": "Elizabeth Gulli",        "class": "2020 AΩ", "active": "y", "parent": "Melissa Perrin"},
	{"name": "Erik Tompkins",        "class": "2020 AΩ", "active": "n", "parent": "Johnny Urosevic"},
	{"name": "Ethan Chen",        "class": "2020 AΩ", "active": "n", "parent": "Diana Greenwood"},
	{"name": "Gerald Bernal",        "class": "2020 AΩ", "active": "y", "parent": "Blanca Carla Arriaga"},
	{"name": "Ivan Briceño",        "class": "2020 AΩ", "active": "n", "parent": "Yahaira Cortez"},
	{"name": "Jared Yuge",        "class": "2020 AΩ", "active": "n", "parent": "Ethan Kim"},
	{"name": "Katy Rucker",        "class": "2020 AΩ", "active": "n", "parent": "Kyle Reidy"},
	{"name": "Lorraine Sim",        "class": "2020 AΩ", "active": "n", "parent": "Leo Pfeiffer"},
	{"name": "Marco Cornelio",        "class": "2020 AΩ", "active": "n", "parent": "Annabel Li"},
	{"name": "Niels Dawson",        "class": "2020 AΩ", "active": "n", "parent": "Aylin Henstridge"},
	{"name": "Pamela Jansen",        "class": "2020 AΩ", "active": "n", "parent": "Madelyn Armes"},
	{"name": "Raghu Tekumalla",        "class": "2020 AΩ", "active": "n", "parent": "Chris Calles"},
	{"name": "Ryo Shiratori ",        "class": "2020 AΩ", "active": "n", "parent": "Cheyenne Suzukawa"},
	{"name": "Sophie Robbins",        "class": "2020 AΩ", "active": "y", "parent": "Elizabeth Gallmeister"},
	{"name": "Tess Louie",        "class": "2020 AΩ", "active": "n", "parent": "Sierra Talbert"},
	{"name": "Victoria Sanchez",        "class": "2020 AΩ", "active": "y", "parent": "Paolo Gaudiel"},
	{"name": "Xitlaly Lopez",        "class": "2020 AΩ", "active": "n", "parent": "Emma Atkins"},
	{"name": "Yoselin Guzman",        "class": "2020 AΩ", "active": "n", "parent": "Blanca Carla Arriaga"},
	{"name": "Zachary Judson",        "class": "2020 AΩ", "active": "n", "parent": "Ethan Brandt"},

  //Beta Alpha 2021 ΒΑ
	{"name": "Amanda Leyel",        "class": "2021 ΒΑ", "active": "y", "parent": "Marco Cornelio"},
	{"name": "Ben Sandstrom",        "class": "2021 ΒΑ", "active": "n", "parent": "Lorraine Sim"},
	{"name": "Cameron Brewer",        "class": "2021 ΒΑ", "active": "y", "parent": "Cecilia Luisa Porras"},
	{"name": "Carol Mulumba",        "class": "2021 ΒΑ", "active": "y", "parent": "Deborah Gallego"},
	{"name": "Connor Ridley",        "class": "2021 ΒΑ", "active": "n", "parent": "Lorraine Sim"},
	{"name": "Desiree Alvarado",        "class": "2021 ΒΑ", "active": "y", "parent": "Niels Dawson"},
	{"name": "Emma Gloyer",        "class": "2021 ΒΑ", "active": "y", "parent": "Elizabeth Gulli"},
	{"name": "Jovan Romo",        "class": "2021 ΒΑ", "active": "y", "parent": "Raghu Tekumalla"},
	{"name": "Kenzie Hernandez",        "class": "2021 ΒΑ", "active": "n", "parent": "Zachary Judson"},
	{"name": "Mia Riedel",        "class": "2021 ΒΑ", "active": "y", "parent": "Pamela Jansen"},
	{"name": "Nohemi Garcia Soto",        "class": "2021 ΒΑ", "active": "y", "parent": "Tess Louie"},
	{"name": "Tatiana Duckworth",        "class": "2021 ΒΑ", "active": "n", "parent": "Madelyn Armes"},
	{"name": "Yasmith Farnan",        "class": "2021 ΒΑ", "active": "y", "parent": "Victoria Sanchez"},
	
  //Beta Beta 2022 ΒB
	{"name": "Aviv Shifrin",        "class": "2022 ΒB", "active": "y", "parent": "Tatiana Duckworth"},
	{"name": "Cris Ochoa",        "class": "2022 ΒB", "active": "y", "parent": "Nohemi Garcia Soto"},
	{"name": "LT Tarara",        "class": "2022 ΒB", "active": "y", "parent": "Marco Cornelio"},
	{"name": "Emma Blakely",        "class": "2022 ΒB", "active": "y", "parent": "Cameron Brewer"},
	{"name": "Faith Shortridge",        "class": "2022 ΒB", "active": "y", "parent": "Yasmith Farnan"},
	{"name": "Katherine Escobar",        "class": "2022 ΒB", "active": "y", "parent": "Cameron Brewer"},
	{"name": "Kathy Rodriguez",        "class": "2022 ΒB", "active": "y", "parent": "Tatiana Duckworth"},
	{"name": "Kristal Light",        "class": "2022 ΒB", "active": "y", "parent": "Mia Riedel"},
	{"name": "Marin Schneider",        "class": "2022 ΒB", "active": "y", "parent": "Amanda Leyel"},
	{"name": "Myrsini Melia San Marchi",        "class": "2022 ΒB", "active": "n", "parent": "Emma Gloyer"},
	{"name": "Matthew Niiya",        "class": "2022 ΒB", "active": "y", "parent": "Amanda Leyel"},
	{"name": "Maxine Knystautas",        "class": "2022 ΒB", "active": "y", "parent": "Mia Riedel"},
	{"name": "Sylvia Rutkowski",        "class": "2022 ΒB", "active": "y", "parent": "Jovan Romo"},
	{"name": "Trevor Fermin",        "class": "2022 ΒB", "active": "y", "parent": "Jovan Romo"},
	{"name": "Yuki Minowa",        "class": "2022 ΒB", "active": "n", "parent": "Ethan Chen"},
	
  //Beta Gamma 2023 BG
	{"name": "Neeti Indiresan",        "class": "2023 ΒG", "active": "y", "parent": "Kristal Light"},
	{"name": "Madison Muggeo",        "class": "2023 ΒG", "active": "y", "parent": "LT Tarara"},
	{"name": "Bella Benavides",        "class": "2023 ΒG", "active": "y", "parent": "Cris Ochoa"},
	{"name": "Aaliyah Kueffner",        "class": "2023 ΒG", "active": "y", "parent": "Kathy Rodriguez"},
	{"name": "Rithika Charles",        "class": "2023 ΒG", "active": "y", "parent": "Trevor Fermin"},
	{"name": "Keira Okada",        "class": "2023 ΒG", "active": "y", "parent": "Faith Shortridge"},
	{"name": "Citlali Ortiz",        "class": "2023 ΒG", "active": "y", "parent": "Emma Blakely"},
];


// THE MAPPING CODE

// IDK WHAT THIS PART DOES HONESTLY
// IF YOU KNOW JAVASCRIPT AND CAN UNDERSTAND THIS CODE PLEASE ADD COMMENTS EXPLAINING HOW THIS CODE WORKS

var data; // a global

$.getJSON("family-tree-2021.json", function(json) {
    console.log(json[0].name); // this will show the info it in firebug console
});


var dataMap = data.reduce(function(map, node) {
    map[node.name] = node;
    return map;
}, {});


var treeData = [];
data.forEach(function(node) {
    // add to parent
    var parent = dataMap[node.parent];
    if (parent) {
	// create child array if it doesn't exist
	(parent.children || (parent.children = []))
	// add node to child array
	    .push(node);
    } else {
	// parent is null or missing
	treeData.push(node);
    }
});

// ************** Generate the tree diagram  *****************
var margin = {top: 20, right: 20, bottom: 20, left: 120},
width = 4100 - margin.right - margin.left,
height = 3000 - margin.top - margin.bottom;

var i = 0,
duration = 750,
root;

var tree = d3.layout.tree()
    .size([height, width]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

root = treeData[0];
root.x0 = height / 2;
root.y0 = 0;

update(root);

d3.select(self.frameElement).style("height", "500px");


function update(source) {

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) { d.y = d.depth * 180; });

    // Update the nodesâ€¦
    var node = svg.selectAll("g.node")
	.data(nodes, function(d) { return d.id || (d.id = ++i); });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
	.attr("class", "node")
	.attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
	.on("click", click);

    nodeEnter.append("circle")
	.attr("r", 1e-6)
	.style("fill", function(d) { return d._children ? "royalblue" : "#fff"; });

    nodeEnter.append("text")
	.attr("x", function(d) { return d.children || d._children ? -13 : -13; })
	.attr("y", -10)
	.attr("dy", ".35em")
	.attr("text-anchor", function(d) { return d.children || d._children ? "end" : "end"; })
	.text(function(d) { return d.name; })
	.style("fill-opacity", 1);

    nodeEnter.append("text")
	.attr("x", function(d) { return d.children || d._children ? -13 : -13; })
	.attr("y", 10)
	.attr("dy", ".35em")
	.attr("text-anchor", function(d) { return d.children || d._children ? "end" : "end"; })
	.text(function(d) { return d.class; })
	.style("fill-opacity", 1);

	//adding bios to nodes
	nodeEnter.append("a")
	.attr("xlink:href", function(d){return d.bio;})
	.append("text")
	.attr("x", function(d) { return d.children || d._children ? -13 : -13; })
	.attr("y", 10)
	.attr("dy", ".35em")
	.attr("text-anchor", function(d) { return d.children || d._children ? "end" : "end"; })
	.style("pointer-events", "none")
	.text(function(d) { return d.class; })
	.style("fill-opacity", 1);



    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
	.duration(duration)
	.attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

    nodeUpdate.select("circle")
	.attr("r", 11)
	.style("fill", function(d) {
	    if ( d._children )
		return "royalblue";
	    if ( d.class === "2023 ΒΓ" )
		return "#C2E0FF";
	    if ( d.active === "y" )
		return "gold";
	    return "#fff"; });

    nodeUpdate.select("text")
	.style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
	.duration(duration)
	.attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
	.remove();

    nodeExit.select("circle")
	.attr("r", 1e-6);

    nodeExit.select("text")
	.style("fill-opacity", 1e-6);

    // Update the linksâ€¦
    var link = svg.selectAll("path.link")
	.data(links, function(d) { return d.target.id; });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
	.attr("class", "link")
	.attr("d", function(d) {
	    var o = {x: source.x0, y: source.y0};
	    return diagonal({source: o, target: o});
	});

    // Transition links to their new position.
    link.transition()
	.duration(duration)
	.attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
	.duration(duration)
	.attr("d", function(d) {
	    var o = {x: source.x, y: source.y};
	    return diagonal({source: o, target: o});
	})
	.remove();

    // Stash the old positions for transition.
    nodes.forEach(function(d) {
	d.x0 = d.x;
	d.y0 = d.y;
    });
}



function click(d) {
    if (d.children) {
	d._children = d.children;
	d.children = null;
    } else {
	d.children = d._children;
	d._children = null;
    }
    // This comment is here
    update(d);
}
