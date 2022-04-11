let areeey = [
  "  Drowning in bathtub",

  "  Drowning in ocean because of undertow",

  "  Drowning in a molasses spill",

  "  Suffocation by pillow",

  "  Suffocation after entire body has been painted",

  "  Hanging by rope",

  "  Electrocution for death penalty",

  "  Electrocution by hairdryer",

  "  Electrocution by electrified fence",

  " Electrocution while changing light bulb",

  " Hit by lightning",

  " Knife in the chest",

  " Knife in the leg",

  " Axe to the head",

  " Bleeding out because of slit wrists",

  " Arson",

  " Gas leak in house",

  " Smoke inhalation",

  " Bullet to the head",

  " Accidental drug overdose",

  " Medical malpractice",

  " Tripped and hit head, cracking skull",

  " Beaten to death",

  " Death by roller coaster",

  " Vending machine fell with your arm in it",

  " Lethal mix of drugs and alcohol",

  " Alcohol poisoning",

  " Radiation poisoning",

  " Arsenic in tea",

  " Baked in an oven",

  " Allergic reaction to shellfish",

  " Allergic reaction to nuts",

  " Attacked by wolves",

  " Bitten by cobra",

  " Clawed by tiger",

  " Mauled by a shark",

  " Attacked by alligator ",

  " Bitten by several fire ants",

  " Bitten by poisonous spiders",

  " Crushed by boa constrictor",

  " Thrown from a horse",
  "   Trampled by elephants",
  "   Gored by a bull",
  "  Bitten by scorpion",
  "  Bitten by mosquito during sleep ",
  "  Poisoned by contact with weed killers",
  "  Poisoned by ingesting toxic flowers/leaves",

  "  Crushed by falling tree",

  "   Stepped on a land mine",

  "   Bomb explosion",

  "   Rocket attack",

  "   Hit in the head by a pitched ball",

  "   Death in a boxing match",

  "   Car accident,crushed",

  "   Car accident,gas tank explodes",

  "   Car accident  car ripped in half by telephone wire ",

  "   Hit by a car while crossing the street",

  "   Hit by commuter train",

  "   Propane tank on BBQ exploded",

  "   Chemical spill",

  "   Airplane crash",

  "   Airplane mid-air explosion",

  "   Parachute didn't open",

  "   Parasail collided with cliff",

  "   Choked on food",

  "   Choked on bottle cap",

  "   Pushed off a cliff",

  "   Fell off a roof",

  "  Jumped out a window",

  "  Froze in a snow bank",

  "  Stabbed with icicle",

  "  Buried in an avalanche",

  "  Fell off a ski lift",

  "  Starved to death",

  "  Mercury poisoning",

  "  Asbestos poisoning",

  "  Decapitation",

  "  Strangled by another person",

  "   Strangled  tie caught in laminating machine while wearing it",

  "   Sword fight",

  "   Sniper bullet",

  "   Stabbed with knitting needle",

  "   Hung upside down by feet until dead",

  "   Death by dehydration",

  "   Sinkhole collapsed with person in it ",
  "   Latrine on flatbed of truck fell onto your car",

  "   Death by barbed wire fence ",

  "   Cyanide salts in an almond cake ",

  "   Elevator doors malfunctioned and closed on neck",

  "   Walked into empty elevator shaft",

  "   Jumped off diving board into empty pool",

  "   Got stuck in a storm drain while trying to retrieve wallet",

  "   Trapped inside a folding bed",

  "   Buried under falling bookshelves",

  "   Mangled by farming/industrial machinery",

  "   Botulism",

  "   Shot yourself while cleaning a gun",

  "   Crashed into tree while ziplining",

  "   Bungee cord broke while jumping",

  "  Hypothermia",
];


clicked = () =>
{
  let x = Math.floor((Math.random() * 99) + 1);
  console.log(x);
  document.getElementById("change").innerHTML =  areeey[x];
}
