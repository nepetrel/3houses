function generatePairing(){
allCharacters = new Array("Dimitri",   "Felix", "Sylvain",  "Hubert",   "Edelgard",  "Claude",   "Ferdinand", "Dedue", "Ashe",  "Rhea",  "Dorothea",  "Lorenz",   "Bernadetta",   "Linhardt",  "Hilda", "Seteth",   "Mercedes",  "Ingrid",   "Caspar",   "Blue Lions",   "Rodrigue",  "Annette",  "Lysithea",  "Marianne",  "Glenn", "Miklan",   "Yuri",  "Flayn", "Petra", "Balthus",  "Ignatz",   "Sothis",   "Black Eagles",  "Cyril", "Constance", "Raphael",  "Leonie",   "Hapi",  "Catherine", "Lambert",  "Sex Bandits",  "Shamir",   "Alois", "Tentacle Monster",  "OCs",  "Golden Deer",  "Gilbert",  "Randolph",  "Ladislava", "Fleche");


 var threesome = Math.floor(Math.random()*100);
var pairing = "";
  if(threesome >= 86){
     pairing=allCharacters[Math.floor(Math.random()* allCharacters.length)] + "/" + allCharacters[Math.floor(Math.random()* allCharacters.length)]+ "/" + allCharacters[Math.floor(Math.random()* allCharacters.length)];
  }
  else{
     pairing= allCharacters[Math.floor(Math.random()* allCharacters.length)] + "/" + allCharacters[Math.floor(Math.random()* allCharacters.length)];
  }

  document.getElementById("pairingResult").innerHTML=pairing;
}

function generatePrompt(){
 prompts1 = new Array("Absence makes the heart grow fonder",  "Abuse (sexual, emotional, and/or violent childhood abuse; past abusive relationships; character A's abuse drives character B into arms of character C)",   "Abduction as seduction (beloved captives)", "Accidental stimulation (proximity and friction; involuntary arousal; situations of adrenaline and reflexes)",  "Adrenaline and crises (pre-, mid-, or post-crisis sex; speed-freaks or adrenaline junkies; near-death experiences; the shadow of impending death--hours, minutes, or moments)", "Age gap",  "Age regression (mental and/or physical regression; childlike behavior caused by brain damage; ageplay; A Wizard Did It)",  "Aliens make them have sex (fuck or die; fertility rituals; intoxication; taking one for the team)", "A/B/O", "Alpha/Alpha pairing",  "Amazons and strong women",  "Amnesia",  "Anal penetration with foreign objects", "Anal sex (face to face, from behind, bottom riding top; standing; bent over desk; gay or straight; girl-on-boy with strap-on; girl-on-girl with strap-on)", "Anal/butt plugs (during sex; worn under clothes in public)",   "Angst", "Animalistic behaviors and characteristics, dominant (snarling; sniffing; scent-marking or biting; other claiming acts; territoriality; predatory stalking; cuffing; forcing the partner's neck down; claws and other features)",   "Animalistic behaviors and characteristics, submissive (feral characters or behavior; domesticated pet behavior such as sitting at owner's foot and cheeking their thigh; purring; licking; characters objectified as animals, e.g., ponyboys)", "Animal themes or fetishization (physical transformation, e.g., animagi or werewolves; animalistic features; hirsutism as a fetish; tentacle sex; quasi animal forms such as centaurs, merfolk, intelligent dragons; pets, wild or domesticated; familiars; men showing affection toward animals, e.g., holding kittens, or nuzzling their horses; see also Otherness)", "Anonymous sex (clubbing; glory-holes; alley sex; alien fertility rituals; one-night stands)",  "Anti-heroes (sympathetic villains; villains with principles; noble demons; enemies who keep their word)",  "Aphrodisiacs",  "Aristocracy (aristocratic behaviors, characteristics, and/or identity; chivalry and noblesse oblige; royal blood; elegance or effeteness; dignity; royal courts or castles; imperial cultures; Greco-Roman classicism; dynastic families; gentlemen; aristocrat pairings with houseboys, stable-boys, or secretaries)", "Asphyxiation (asphyxiophilia; autoerotic asphyxiation; scarfing; choking; breath play)",   "Ass-play and/or fetishization (ass lifted in the air for penetration; emphasized by harness or blue jeans; ass slapping; spreading cheeks; rimming)",  "Attention (singling someone out; treating someone specially in front of others; making a point of showing respect to or interest in someone who doesn't usually receive it; observing, studying, or analyzing someone to understand them)", "Auctions (slave or slave charity)", "Bad boys (punks, rebels)",  "Bad girls (dirty girls; naughty schoolgirls; femme fatales)",  "Bar and club scenes (dancing, cruising, etc)",  "Barebacking",  "Baths and water (tubs or jacuzzis; hot springs; bath houses or steam rooms; the ocean; swimming pools; see also Washing; Shower sex)",  "BDSM",  "Beards or stubble", "Beauty (movie-star looks; unearthly beauty; a character who is highly desired by many others; beauty as a barrier to approachability or as a cause for comparison and insecurity)", "Begging or offering (begging or pleading for mercy, for sexual release, to be taken; a character offering himself; neediness)", "Beloved enemies",  "Bestiality",   "Size Difference",  "Biological imperative", "Bisexuality",  "Biting (marking, nipping, chewing)",   "Blood (fetishization of wounds; blood-play; blood as lube; vampirism)", "Blow-jobs (oral sex, fellatio)",   "Body fetishes (ears, muscular arms, breasts, bald heads, collarbones, cheekbones, bare feet or chest, etc; fatness, plumpness, softness; skin, e.g., weathered, tanned, soft)", "Body modification (geek-to-jock makeovers; physical enhancements such as wetwear; alien transformations; scarification and piercing; forced feminization or castration)",  "Body-painting or inkbrushing on someone's skin",   "Body swap", "Bodyguard scenarios",  "Bondage",  "Bonds (telepathic or empathic; psychic links; mating or soul bonds)",  "Bottoming", "Sugar baby",   "Branding (erotic or non-erotic)",  "Breathplay",   "Brothels",  "Bruises and other wounds",  "Bukkake",  "Castration (full or partial; castratos/eunuchs)",  "Catalysts (e.g., character A shows interest in character B, which makes character C realize how hot B is; or other catalytic events bringing about such an epiphany)",  "Charisma (see Powers of attraction)",  "Chastity devices",  "Children (i.e., as their presence reflects on a character, e.g., tough men gently holding babies; men who are/aren't good with kids; devoted single dads; Ripley characters/scenarios; pregnancy)", "Cinderella stories (rescuing someone from servitude or cruel family; going from rags to riches; Pretty Woman scenarios; fairy-tale romances in general)",  "Claiming or establishing ownership (private or public; by gesture, word, or ritual; with sex; with a collar and leash; with scent-marking or by biting)",  "Clothes fetishization (of any kind, e.g., uniforms; leather gear; worn blue jeans; thigh-highs; stilettos; leather jackets; tuxedos or GQ wear; constricting or modest clothes; boxer-briefs; going commando)", "Clumsiness (awkwardness; overeagerness; during sex or in general)", "Cock and/or ball fetishization (uncircumcised cocks; large cocks; heavy balls; durable erection; deep dicking; very hard/rigid erection; trouser bulges)",  "Cock and/or ball torture (whipping, stretching, catheters, etc)",  "Cock bondage (cock rings; harnesses and straps; leather ropework)", "Cock worship",  "Collars (slave)",  "Come-marking (letting it dry visibly on the skin)", "Coming in one's pants", "Coming in or on one's partner (in ass or mouth; in hair; on body; on face, i.e., facial)",  "Coming quickly (premature ejaculation or knee-jerk reflex response)",  "Coming without being touched",  "Competence",   "Conditioning (taming or breaking a character; training; brainwashing; Stockholm syndrome)", "Confessions (revelation of love/desire; of other secrets; truth or dare games. deathbed confessions; revealing truths when feverish)",  "Conflicts and challenges (war and combat in general; sieges; Die Hard scenarios; jousting; gladiatorial games; wrestling and sparring; duels of honor; bets and sports competitions; romantic rivalries; seduction viewed as a challenge; misunderstandings and fights; break-ups; traded insults; stormy relationships; family strife; personality clashes; cultural differences; philosophical disagreements)",  "Courtesans",   "Courting and dating (courtship rituals; dating; blind dates; personal ads; traditional gestures such as flowers and chocolates; unusual gestures designed to win someone's attention; showing off or displaying prowess; rivals seeking a character's favor; see also Seduction)",  "Crossdressing (forced or voluntary)",  "Crush or unrequited love",  "Crying, sobbing (erotic and non-erotic)",  "Cuddling",  "Cunnilingus",  "Cyber themes (cybersex; virtual reality scenarios; e-mail/chatroom interaction, including secret admirer scenarios; see also Techno)",  "Daddy kink",   "Damsel in distress scenarios (danger and rescue)",  "Dancing",  "Deep-throating",   "Delayed gratification", "Depilation (waxing, shaving)",  "Dildos (dildo gags; harnesses; strap-ons; ritual phalluses)",  "Discipline or punishment",  "Discomfort during sex (rough edge of a table as counterpoint to pleasure; cold stone versus hot flesh; position is uncomfortable at first but then becomes perfect; penetration is painful, then pleasurable)", "Docking",  "Domesticity (moving in together; nesting; shopping; building a family or meeting the family; getting a cat or dog; kidfic)",   "Dominance and submission (See also Submission; Servitude; Master and slave, etc)",  "Double penetration (anal, vaginal, or oral)",  "Drugs (recreational drug use; Viagra; self-destructive addictions; addiction as a by-product of pain management; alcoholism and sobriety)", "Dystopias (apocalyptic or post-apocalyptic worlds; alien invasions; pandemics; computers take over; settings in Hell, or earth becomes Hell)",  "Ejaculate, come (heavy loads; pre-ejaculate slickness; messy orgasms)");
prompts2 = new Array("Emotional themes, emo-kink (angst; wallows; darkfic; emotional damage; psychological trauma; tragic pasts; broken characters; guilt and shame; mental instability; sadness and grief; abandonment or fear of same; characters who can't go home again; fear in general; nightmares; loneliness; broken-heartedness; failure; insecurity; self-hatred; self-mutilation such as secret cutting; suicide)",   "Endearments (see Names)",  "Enemas",   "Enemies working together",  "Erotic torture",   "Exhibitionism", "Exposure (with or without eroticism; feeling physically exposed, such as with legs open; a woman's shirt being opened to expose her breasts; characters being forced to undress in public; someone opening a door on people having sex)",  "Facefucking",  "Face-sitting (straddling for blow-job or cunnilingus)", "Fake dating",  "Falling (falling from grace; going bad; turning to the Dark Side; Faustian deals; succumbing to temptation or addiction; degradation and descent in general)",  "Fantasies (shared or solitary; role-playing)",  "Feminine terms used for males (e.g., calling a man a bitch, calling his ass a pussy; using condescending endearments such as honey or precious)",  "Femmes (effeminacy)",  "Object fetishism (shoes, cigarettes, lipstick, coffee cups, eyeglasses, motorcycles, canes, etc)",  "Finger-fucking",   "First times (first time between two individuals; losing virginity/cherry; first time doing a particular act; first time with a particular gender)", "Fish out of water characters/scenarios",   "Fisting (anal or vaginal)", "Flirting (conscious or unconscious; with glances or touches; banter)",  "Food (feeding one's partner; romantic dinners; food as foreplay or flirting; food used during sex, such as whipped cream or chocolate)",   "Forbidden pleasures (love affairs or trysts; in general, wanting someone or something that's expressly forbidden)", "Forced feminization",  "Forced orgasm", "Forced pregnancy",  "Foreplay",  "Friction or frottage (naked or clothed; masturbatory or with partner; cocks rubbing together; tribadism; intercrural sex; someone rubbing off on sheets while giving head or being fucked; itchiness and scratching; chafing clothes; friction while on horseback or riding a motorcycle; accidental contact)", "Friendship and affection (gestures of friendship; epic friendships a la Gilgamesh/Enkidu or Alexander/Hephaistion; friendship as pre-slash)",  "Fuckbuddies",  "Fucking machines",  "Fuck or die",  "Future fic",   "Gags (ball-gags, scarves, mouth bits, etc)",   "Gender themes", "Gentleness (tenderness; kindness; concern; gentle natures; characters who display sensitivity to fearful children, animals, the weak, etc; gentle responses at unexpected moments)",   "Getaways (romantic weekends; tropical vacations; ski chalets)", "Going native",  "Golden showers",   "Good boys (law enforcement figures; gentlemen; characters who prompt a desire to corrupt or provoke them, or to get them dirty; priests; prim schoolteachers; angels; nice guys; virtue and nobility in general)",  "Good girls (nice girls; daddy's girls; schoolmarms; nuns)", "Grunge (dirty and sweaty, needing a shower; actual mud/dirt elements in a sex scene)",  "Guns and gun-play (guns as fetish objects; gun-battles as flirting or foreplay; guns used for sexual penetration; games of Russian Roulette)",  "Hair or fur fetishization (buzz-cuts; long hair; hair-grabbing during blow-jobs; coming in someone's hair; pubic hair; hairy chests; underarm hair; hair all over e.g., Wookies, werewolves, yeti, etcn)",  "Hand fetishization (big strong hands; steady hands; rough knuckles; calluses; fists clenching in sheets)",  "Hand-jobs", "Happiness (startled joy; passionate gratitude; ecstasy; comfort; happy endings)",  "Harems or seraglios",  "Healing or comfort sex (post-rape or abuse; affirming life in the midst of death; captives turning to one another for comfort; one character soothing another who is deeply upset or fearful)", "Heatsex",  "Heroes (knights and champions; superheroes; samurai or ronin; super-soldiers; ordinary characters becoming heroes and characters overcoming fear with bravery; rebel/underground heroes; saviors and liberators; avengers; Good boys)", "Heroic gestures (nobility; self-sacrifice; risking self to save someone's life; Gift of the Magi scenarios; taking the partner's place for torture; trading sexual favors to guards to procure food or medicine for partner; heroic deaths)",  "Historical and period settings",   "Homosocial environments (i.e., all-male or all-female, such as prisons or harems)", "Hot spots (a special spot that make someone crazy when stimulated, such as the vampire spot on the neck, the backs of the knees, the inner arms, navel, or earlobes)",  "Human furniture",  "Humiliation (erotic or non-erotic)",   "Hurt/comfort (emotional and/or physical, including torture of all kinds and degrees, and any form of caretaking)",  "Ice princesses, snow queens (cold characters who may or may not succumb to melting; need not be female)",  "Immobilization and/or helplessness",   "Impotence", "Imprisonment",  "Incest (including brother/sister complex)", "Intercrural or interfemoral sex (i.e., thrusting cock between partner's thighs)",  "Thigh Riding (rubbing against a partner's thigh to achieve orgasm)",   "Intoxication and altered states (aphrodisiacs; drugs or alcohol; sex pollen/spores; substances or devices that create arousal, affection, or dependency; speaking or showing the truth while intoxicated; visionary states)",  "Jewelry (decorative and/or symbolic; wedding rings; earrings; slave bracelets; piercings)", "Journeys (odysseys and quests; time-travel; being lost and trying to get home; road trips; pioneering and exploration, including space travel)",   "Kissing, necking",  "Knives and knife-play", "Lady and the Tramp pairings",  "Loss of control (emotional, physical, situational, erotic, etc)",  "Love and passion (falling in love; love at first sight; one true love; eternal love; unconditional love; star-crossed lovers; tempestuous passions)",  "Love/hate relationship",   "Magical themes (love spells; magical characters or creatures; magical lands or settings; predictions; curses; possession; fairytales; magical girls; see also Special powers and skills)",  "Makeovers", "Makeup and/or nail polish on men",  "Makeup sex or reunions",   "Marriage (of arrangement, convenience, or necessity; accidental marriage; group marriage; traditional marriage or partnership ceremony)",  "Masks", "Masochism", "Masquerade (a character pretends to be someone else, or something he's not, e.g., a nebbishy nerd must convince goons he's a ruthless arms dealer or assassin; a cop goes undercover in prison; a spy infiltrates an agency; a good guy pretends to be his AU evil twin; Cyrano scenarios)",   "Massage",  "Master and slave (erotic or romantic slavery, or otherwise; see Power issues)", "Masturbation (solitary or as performance)", "Medical scenarios and fetishization",  "Messiness and markers of arousal (mussed hair; flushed cheeks; swollen mouth; displaying bite marks or hickeys; clothes in disarray; sprawling; come-spattered skin)",  "Military fetishization (competence; guns, knives, and other weapons; uniforms, dog-tags, thigh-holsters, etc; authority; soldiers and rebels; paramilitary figures such as cops; brothers in arms as a romantic concept)",  "Mindfuck, mindgames",  "Mirrors",  "Mpreg (male pregnancy)",   "Multiple orgasms",  "Mummification and/or sensory deprivation",  "Muscled bodies",   "Music (singing; playing an instrument such as guitar or piano; composers; rock stars or bands; groupies; song lyrics)", "Names and address (endearments: sweetheart, honey, mine; nicknames: chief, kid, sport; terms that assert power: boy, cunt; insulting terms that may hide some affection: monkey-boy, Your Worshipfulness, you big furry oaf; using someone's name as a sign of intimacy; using only formal modes of address: Sir, Major)",  "Nautical themes and fetishization (ships and the sea; rum, sodomy, and the lash; cabin boys; navy/pirate conflicts; colonialism; desert islands and buried treasure)",  "Neck fetishization (nape of the neck, throat, hickeys, etc)",  "Nipple play or torture",   "Noise (screaming or yelling during sex; whimpering or sobbing; purring, growling; slurping or moaning enthusiastically during blow-jobs)",  "Noncon");
prompts3 = new Array("Oral fixation or fetishization (lips, tongue, or whole mouth; french-kissing; licking; oral displays using food or beer bottles; smoking cigarettes, cigars, or pipes; biting or chewing one's lip(s))",   "Orgasm denial", "Otherness and outsiders (alien identity or transformation; mutants; demons and angels; hermaphrodites; eccentrics; elves and other magical beings; exoticism; half-human hybrids, e.g., the offspring of humans with demons, vampires, aliens, elves; racial difference in general; clones; twins; see also Secret identity; Special powers; Exoticism)",  "Pain (with or without pleasure/endorphins)",   "Pampering (spoiling someone rotten with gifts or money; physical pampering such as massage and grooming; giving someone a novel or unexpected degree of emotional or sexual care; catering to someone's every whim, e.g., someone who is in the hospital; harems as settings for pampering)",  "Penance or reform (bad boy turns good; evil seeks to change; performing acts of atonement or restitution; self-mortification; martyrdom; selflessness; apologies or apology sex)",  "Physical imperfections (scars or burns; acne pits; heaviness; outsized features such as ears or nose; jolie-laide/ugly-beautiful characters)",  "Physical responses (face or ears burning; little hairs lifting on the scalp or neck; gut tightening; pulse quickening or missing a beat; lashes fluttering or lids growing heavy; mouth coming open; dick or pussy throbbing)", "Pillow biting", "Playing hard to get",  "Ponyplay",  "Pornography (magazines and videos; character was previously a porn star or fluffer)",  "Possession (by alien entity, spirits, or another person)",  "Possessiveness or jealousy",   "Power issues (inequities in beauty, rank, or class; power games; BDSM; power reversals; sheikhs, sultans, princes, and other royal figures; teacher/student pairings; magical powers; abuse of power; blackmail; romantic slavery; liege/lord pairings; issues of respect; sexual scenarios such as a dominant character giving his partner to others to use, or a character kneeling beneath a desk and blowing someone who's on the phone)",  "Power issues, sociopolitical (colonialism; alien invasion or rule; institutionalized slavery; totalitarian states and rebellion; powerful secret societies, e.g., the Illuminati or Watcher-style organizations)",  "Powers of attraction (characters such as sirens and Veelas; vampiric thrall; pheromones; magnetic and charismatic characters in general)",  "Predator/prey pairings",   "Preferential treatment (e.g., making a point of showing respect towards someone when no one else does; showing a soft side only to them)",  "Prison scenarios (prison rape and/or protection; cruel guards; punishment; hard labor; deprivation; prisoners of war; camps and barracks; false imprisonment)", "War Prize (characters who are eroticized as prizes or spoils of war)",  "Hiding past abuse", "Protectiveness (physically or verbally defending someone; caretaking in general; bodyguard scenarios; mysterious benefactors or protectors)",  "Public displays of affection, PDAs",   "Pushy bottom",  "Rape recovery", "Religion (sin; faith and lack of faith; priests, monks, nuns, etc; shamans; biblical characters; angels and demons; gods and goddesses; saints; monastic or convent culture)",  "Rescue (danger and rescue in general, e.g., abductions)",  "Restraint (pinning someone down; pushing someone's arm up behind their back during sex; covering or clasping someone's hands to prevent movement)", "Restraints (handcuffs, leather ties, chains, etc)", "Restraints, full-body (stocks; suspension harnesses; fisting slings)",  "Role Reversal", "For Want of a Nail (One thing going differently causes the plot to spiral in a totally different direction)",  "Rimming or tongue-fucking", "Rogues (outlaws, highwaymen, mercenaries, pirates, gangsters, hitmen, etc; black sheep and royal bastards; Han Solo characters; tricksters)",  "Romance (see Love and passion; Courting; Seduction)",  "Ropework (intricate/artistic erotic bondage)",  "Rough sex (quick and dirty sex; hate or grudge sex; angry sex; fighting/wrestling; jackhammer fucking; sex with no or little lube)",   "Sadism or sadomasochism",  "Scars or scarification",   "Scent as an erotic element",   "Secret admirers",  "Secret identity (superheroes, slayers, immortals, mutants, etc; disguised gender; spies)",  "Secrets (dark or criminal past; double lives; previous marriage and/or children; unspoken feelings)",  "Seduction (one-on-one; two-on-one; verbal or physical; intense erotic courtship or teasing)",  "Sensory overload or enhancement",  "Sex in public or semi-public places",  "Sex in vehicles (cars, taxis, limos; planes or space shuttles; motorcycles; carnival rides)",  "Sex is interrupted",   "Sex on, against, or under furniture",  "Sex on horseback, pegasusback, or wyvernback",  "Sex outdoors/outside (in a field; in a rainstorm; with snow falling; on the beach; in a graveyard; in an alley)",  "Xeno",  "Sex with clothes still on or partly on",   "Hypersexuality or sex addiction",  "Sexual discovery (of one's orientation; of new kinds of pleasure; of one's partner)",  "Sexual experience or expertise (high number of partners; wide variety of sexual experience; demonstrating experience by taking the lead in sex or teaching one's partner)", "Sexual frustration (orgasm denial or being unable to come; blue balls; enforced abstinence; self-denial; inability of two people to touch)",   "Sexual hang-ups",  "Sexual movements (back arching; hips lifting; thrusting back; writhing, jerking, bucking; clenching; grinding or rocking; trembling or shivering; hooking legs around shoulders; pressing someone's legs back toward the bed; riding someone's fingers)",  "Sharing (sharing a beer bottle, joint, or bucket of popcorn; loaning someone clothes; a character letting someone stay in their home; sharing confidences; sharing a woman)",  "Shower sex",   "Shyness (embarrassment; blushing or stammering; body shyness or dysmorphic disorder; cultural modesty)",   "Silence (silence as an erotic element in sex; trying to be silent during semi-public sex; going nonverbal or speechless with arousal; traumatic mutism; selective mutism; sign language; gestures used to convey feelings rather than words)",  "Situational engineering (the conscious or unconscious manufacture of events that give an emotional or sexual pay-off which can't be otherwise achieved; in particular, perilous situations; for example, character A puts himself in danger in order to receive fussy attention from character B; pay-off can be simply seeing someone, or hurt/comfort touching, intimacy, adrenaline sex, etc)",  "Sixty-nine (69)",  "Size queens",  "Only One Bed",  "Huddling for warmth",  "Slow and/or prolonged sex", "Spanking (over the knee or lap, etc)",  "Special powers and skills (superhero powers; magical powers; telekinesis; shapeshifting; hyperdeveloped senses; combat expertise; sharpshooting; eidetic memory; computer hacking skills; thief skills; temporary gifts of power from drugs, alien devices, etc, repercussions of which could include delusions of godhood, dangerous physical or mental overload, and so on)", "Spooning",  "Sports themes and fetishization (sports rivalries; uniforms and jock-straps; wrestling and sweaty exertion in general; locker-room or shower scenes; team gang-bangs; swimmer/surfer body types; pool and billiards games)",   "Friendship as pretext (comparing dick size or other body parts; lending a helping hand; circle jerks; watching porn together, with or without masturbation; practicing dancing, kissing, or romantic conversation in preparation for one character having a date with another person)", "Striking with implements (whips, belts, riding crops, canes, paddles, etc)",   "Striptease",   "Submission (obedience; submissive behaviors such as boot kissing, crawling, keeping one's eyes lowered, or kneeling for master; believing in cultural dictates of submissive behavior; abasement in general)",  "Swords and sword-play", "Talking and communication issues (dirty talk or verbal seduction; sweet talking; reciting poetry; talking someone to orgasm; talking during sex; pillow talk; phone sex; speech becoming broken as one is aroused or upset; being inarticulate or articulate; aphasia; talking fast; miscommunication and misunderstandings in general; lack of a shared language)",   "Taste as an erotic element",   "Tattoos (decorative, symbolic, or slave; barcodes)",   "Teasing or tickling",  "Technophilia (artificial humans; character is copied or downloaded into mechanical host body; other ghost in the machine scenarios; androids and cyborgs as sexual partners; wetwear enhancements; cyberpunk aesthetic; VR or Matrix scenarios)",  "Telepathy", "Tentacle sex",  "Topping from the bottom",  "Touching (stroking and caressing; cuddling or nuzzling; huddling for warmth; hugging; holding hands in public; touching as UST; brief brushes of contact either deliberate or accidental; PDAs; thighs brushing under a table; comic physical entanglements; someone gripping a wounded character's hand)", "Toughness (machismo or hyper-masculinity; physical stamina; a hard surface covering an inner softie; resolve; survival skills; teeth-gritting acts such as pulling an arrow out of one's own thigh, etc)",  "Toys and devices (sex toys of all kinds; feathers, ice cubes, hot wax, etc)",  "Tragic flaws",  "Trapped or stranded together (on another world; on a desert island; in a cave-in; in a cabin during a snowstorm; in an elevator)",  "Love triangle", "Triangulation of desire (two people repress their desire for each other into desire for another; conduit threesome in which the person in the middle is used as a tool for each of the others to fuck each other; sexual rivalry for a third party is actually suppressed sexual interest for each other)", "Trust and vows (promises are kept or broken; loyalty or betrayal; absolute trust or doubt; fidelity or infidelity; blindfolds or bondage as trust symbols; commitment or fear of commitment; acts of devotion; marriage vows; unconditional love; blood brothers and oaths; showing trust/faith in someone's abilities)",  "Undressing (undressing in front of someone for the first time; one character undressing another; fumbling clumsily to get undressed; stripteases)", "Urgency for sex (begging to suck cock; desperate to fuck; greedy bottom)",  "Vaginal penetration with foreign objects",  "Vampires",  "Violent feelings (hatred; murderous rage; need for revenge)",  "Violent and dark natures (sadists; assassins and murderers; sociopaths who make twisted, scary displays of affection, conflating love and violence; criminals and villains in general; characters who are ruthless, merciless, casually vengeful; soulless demons or vampires; monsters in general)",  "Virgins or inexperienced partners", "Voice fetishization (cracking or broken; husky, low, throaty; purring; accents; whispering close to someone's ear)",   "Voyeurism and vision themes (character A secretly watches B and C have sex; character A is forced to watch B and C have sex; character A watches character B perform/masturbate; viewing one's beloved in general; taking pictures or video; eye contact, especially as flirting; establishing authority with a look; closing eyes as a trust gesture; character A feeling that character B truly sees him, when no one else does; the quality of light, e.g., characters lit by moonlight or candlelight, or gilded by the setting sun; being in the dark; temporary or permanent blindness; gazes as objectification)",  "Vulnerability", "Washing (washing one's partner, body or hair; bubble baths; shower scenes; slave service in bath; cleaning/cleansing someone who's been raped, degraded, or who is injured)",  "Weapon fetishization (gun fu; trademark weaponry: Lara Croft's dual pistols, Duncan's katana; exotic weapons: war fans, whips; embedded: Wolverine's claws; magical/symbolic: Sting, Excalibur, Narsil; sentient or empathic; hiding a multitude of weapons on one's body; concealment in general: derringer in garter, boot knife; see other individual listings; Military fetishization)",   "Well-fucked (being fucked out; fuck-dazed; sated and sleepy; wrecked; softened and debauched)", "Western scenarios and fetishization (cowboy gear; campfire and trail scenes; horses; gunslingers, lawmen, card sharps, etc; train robberies and bank hold-ups; posses; saloon brawls)", "Wet dreams or erotic dreams",  "Wish-fulfillment",  "Wings (wingfic)",  "Witnesses (families, friends, or others watch the development of a relationship; play matchmaker or serve as confidants; think the characters are involved when they're really not; constitute the public eye; disapprove, gossip, give advice; are the audience for a coming out drama; are witnesses to such things as flirting, public arousal, public sex)",   "Worry (one character worrying anxiously about another; going crazy with worry)",   "Writing (love letters or notes; secret admirers; e-mail and chat; wills; poetry; storytelling; tracing words or figures on skin, or writing, as with an inkbrush)", "Omega/Omega pairing");

 prompts = new Array();
 prompts.concat(prompts1);
 prompts.concat(prompts2);
 prompts.concat(prompts3);
 
 
 var randomPrompt = "";
 randomPrompt = prompts[Math.floor(Math.random()* prompts.length)];
 
  document.getElementById("promptResult").innerHTML=randomPrompt;
 
}
