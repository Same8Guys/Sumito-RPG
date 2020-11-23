// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"SkipTitle","status":false,"description":"","parameters":{}},
{"name":"tripleTriad","status":true,"description":"Triple Triad Full Card Game.","parameters":{"Board Map":"{\"Row 1 Column 1\":\"[\\\"259\\\",\\\"123\\\"]\",\"Row 1 Column 2\":\"[\\\"407\\\",\\\"123\\\"]\",\"Row 1 Column 3\":\"[\\\"557\\\",\\\"123\\\"]\",\"Row 2 Column 1\":\"[\\\"259\\\",\\\"311\\\"]\",\"Row 2 Column 2\":\"[\\\"407\\\",\\\"311\\\"]\",\"Row 2 Column 3\":\"[\\\"557\\\",\\\"311\\\"]\",\"Row 3 Column 1\":\"[\\\"259\\\",\\\"500\\\"]\",\"Row 3 Column 2\":\"[\\\"407\\\",\\\"500\\\"]\",\"Row 3 Column 3\":\"[\\\"557\\\",\\\"500\\\"]\"}","Image Configuration":"{\"arrow_sound\":\"Item3\",\"card_shuffle_sound\":\"Equip2\",\"card_flipping_sound\":\"Wind7\",\"main_cursor\":\"cursor\",\"main_cursor_x\":\"90\",\"main_cursor_y\":\"100\",\"player_1_arrow\":\"Player_turn1\",\"player_1_arrow_x\":\"74\",\"player_1_arrow_y\":\"5\",\"player_2_arrow_x\":\"714\",\"player_2_arrow_y\":\"5\",\"player_2_arrow\":\"Player_turn2\",\"back_card_image\":\"Back_Card\",\"Board_Image\":\"table\",\"Victory_Image\":\"You Win\",\"Draw_Image\":\"Draw\",\"Defeat_Image\":\"You Lose\",\"Same_Image\":\"Same\",\"Plus_Image\":\"Plus\",\"Combo_Image\":\"Combo\",\"card_plus_same_combo_sound\":\"Bell3\",\"victoryME\":\"Victory1\",\"drawME\":\"Shock1\",\"defeatME\":\"Defeat1\",\"usingCursor\":\"true\"}","Card Positions":"{\"Player_1_X\":\"88\",\"Player_1_Y\":\"116\",\"Player_2_X\":\"728\",\"Player_2_Y\":\"116\",\"Distance_Cards\":\"96\"}","Card Creation":"[\"{\\\"Name\\\":\\\"Harpy\\\",\\\"Power(UP)\\\":\\\"3\\\",\\\"Power(LEFT)\\\":\\\"4\\\",\\\"Power(RIGHT)\\\":\\\"1\\\",\\\"Power(DOWN)\\\":\\\"5\\\",\\\"Rarity\\\":\\\"1\\\",\\\"Price\\\":\\\"1\\\",\\\"Image_Player_1\\\":\\\"Harpy\\\",\\\"Image_Player_2\\\":\\\"Harpy_2\\\",\\\"card_description\\\":\\\"\\\\\\\"Harpy is\\\\\\\\na Greek mythological creature\\\\\\\\nhalf-woman, half-bird\\\\\\\"\\\"}\",\"{\\\"Name\\\":\\\"Dionysus\\\",\\\"Power(UP)\\\":\\\"2\\\",\\\"Power(LEFT)\\\":\\\"3\\\",\\\"Power(RIGHT)\\\":\\\"5\\\",\\\"Power(DOWN)\\\":\\\"1\\\",\\\"Rarity\\\":\\\"4\\\",\\\"Price\\\":\\\"50\\\",\\\"Image_Player_1\\\":\\\"Dionysus\\\",\\\"Image_Player_2\\\":\\\"Dionysus_2\\\",\\\"card_description\\\":\\\"\\\\\\\"Dionysus is \\\\\\\\nthe greek god of \\\\\\\\ngrape-harvest\\\\\\\"\\\"}\",\"{\\\"Name\\\":\\\"Isis\\\",\\\"Power(UP)\\\":\\\"1\\\",\\\"Power(LEFT)\\\":\\\"5\\\",\\\"Power(RIGHT)\\\":\\\"7\\\",\\\"Power(DOWN)\\\":\\\"6\\\",\\\"Rarity\\\":\\\"4\\\",\\\"Price\\\":\\\"200\\\",\\\"Image_Player_1\\\":\\\"Isis\\\",\\\"Image_Player_2\\\":\\\"Isis_2\\\",\\\"card_description\\\":\\\"\\\\\\\"Isis is the\\\\\\\\negyptian Goddess of \\\\\\\\nmarriage and fertility\\\\\\\"\\\"}\",\"{\\\"Name\\\":\\\"Medusa\\\",\\\"Power(UP)\\\":\\\"4\\\",\\\"Power(LEFT)\\\":\\\"2\\\",\\\"Power(RIGHT)\\\":\\\"2\\\",\\\"Power(DOWN)\\\":\\\"3\\\",\\\"Rarity\\\":\\\"1\\\",\\\"Price\\\":\\\"50\\\",\\\"Image_Player_1\\\":\\\"Medusa\\\",\\\"Image_Player_2\\\":\\\"Medusa_2\\\",\\\"card_description\\\":\\\"\\\\\\\"Medusa is\\\\\\\\na mythological creature that\\\\\\\\nturns who looks in statues\\\\\\\"\\\"}\",\"{\\\"Name\\\":\\\"Amaterasu\\\",\\\"Power(UP)\\\":\\\"8\\\",\\\"Power(LEFT)\\\":\\\"1\\\",\\\"Power(RIGHT)\\\":\\\"9\\\",\\\"Power(DOWN)\\\":\\\"8\\\",\\\"Rarity\\\":\\\"4\\\",\\\"Price\\\":\\\"100\\\",\\\"Image_Player_1\\\":\\\"Amaterasu\\\",\\\"Image_Player_2\\\":\\\"Amaterasu_2\\\",\\\"card_description\\\":\\\"\\\\\\\"Amaterasu \\\\\\\\nis a Japanese Goddess\\\\\\\"\\\"}\",\"{\\\"Name\\\":\\\"Hades\\\",\\\"Power(UP)\\\":\\\"9\\\",\\\"Power(LEFT)\\\":\\\"10\\\",\\\"Power(RIGHT)\\\":\\\"5\\\",\\\"Power(DOWN)\\\":\\\"6\\\",\\\"Rarity\\\":\\\"1\\\",\\\"Price\\\":\\\"1\\\",\\\"Image_Player_1\\\":\\\"Hades\\\",\\\"Image_Player_2\\\":\\\"Hades_2\\\",\\\"card_description\\\":\\\"\\\\\\\"Hades is\\\\\\\\nthe Greek God of \\\\\\\\nthe inferior world\\\\\\\"\\\"}\",\"{\\\"Name\\\":\\\"Osiris\\\",\\\"Power(UP)\\\":\\\"4\\\",\\\"Power(LEFT)\\\":\\\"2\\\",\\\"Power(RIGHT)\\\":\\\"3\\\",\\\"Power(DOWN)\\\":\\\"4\\\",\\\"Rarity\\\":\\\"1\\\",\\\"Price\\\":\\\"1\\\",\\\"Image_Player_1\\\":\\\"Osiris\\\",\\\"Image_Player_2\\\":\\\"Osiris_2\\\",\\\"card_description\\\":\\\"\\\\\\\"Osiris is \\\\\\\\nan egyptian goddess\\\\\\\"\\\"}\",\"{\\\"Name\\\":\\\"Zeus\\\",\\\"Power(UP)\\\":\\\"10\\\",\\\"Power(LEFT)\\\":\\\"6\\\",\\\"Power(RIGHT)\\\":\\\"5\\\",\\\"Power(DOWN)\\\":\\\"8\\\",\\\"Rarity\\\":\\\"4\\\",\\\"Price\\\":\\\"200\\\",\\\"Image_Player_1\\\":\\\"Zeus\\\",\\\"Image_Player_2\\\":\\\"Zeus_2\\\",\\\"card_description\\\":\\\"\\\\\\\"Zeus is the\\\\\\\\nGreek God of Thunder\\\\\\\"\\\"}\",\"{\\\"Name\\\":\\\"Thor\\\",\\\"Power(UP)\\\":\\\"9\\\",\\\"Power(LEFT)\\\":\\\"5\\\",\\\"Power(RIGHT)\\\":\\\"3\\\",\\\"Power(DOWN)\\\":\\\"8\\\",\\\"Rarity\\\":\\\"4\\\",\\\"Price\\\":\\\"200\\\",\\\"Image_Player_1\\\":\\\"Thor\\\",\\\"Image_Player_2\\\":\\\"Thor_2\\\",\\\"card_description\\\":\\\"\\\\\\\"Thor is the\\\\\\\\nGod of Thunder\\\\\\\"\\\"}\",\"{\\\"Name\\\":\\\"Izanami\\\",\\\"Power(UP)\\\":\\\"7\\\",\\\"Power(LEFT)\\\":\\\"9\\\",\\\"Power(RIGHT)\\\":\\\"3\\\",\\\"Power(DOWN)\\\":\\\"4\\\",\\\"Rarity\\\":\\\"4\\\",\\\"Price\\\":\\\"200\\\",\\\"Image_Player_1\\\":\\\"Izanami\\\",\\\"Image_Player_2\\\":\\\"Izanami_2\\\",\\\"card_description\\\":\\\"\\\\\\\"Izanami is\\\\\\\\nthe Japanese goddess of\\\\\\\\ncreation and death\\\\\\\\n\\\\\\\"\\\"}\",\"{\\\"Name\\\":\\\"Poseidon\\\",\\\"Power(UP)\\\":\\\"2\\\",\\\"Power(LEFT)\\\":\\\"7\\\",\\\"Power(RIGHT)\\\":\\\"9\\\",\\\"Power(DOWN)\\\":\\\"8\\\",\\\"Rarity\\\":\\\"4\\\",\\\"Price\\\":\\\"200\\\",\\\"Image_Player_1\\\":\\\"Poseidon\\\",\\\"Image_Player_2\\\":\\\"Poseidon_2\\\",\\\"card_description\\\":\\\"\\\\\\\"Poseidon is\\\\\\\\nthe God of Oceans\\\\\\\"\\\"}\",\"{\\\"Name\\\":\\\"Loki\\\",\\\"Power(UP)\\\":\\\"1\\\",\\\"Power(LEFT)\\\":\\\"10\\\",\\\"Power(RIGHT)\\\":\\\"10\\\",\\\"Power(DOWN)\\\":\\\"2\\\",\\\"Rarity\\\":\\\"4\\\",\\\"Price\\\":\\\"200\\\",\\\"Image_Player_1\\\":\\\"Loki\\\",\\\"Image_Player_2\\\":\\\"Loki_2\\\",\\\"card_description\\\":\\\"\\\\\\\"Loki is\\\\\\\\nthe God of treachery\\\\\\\"\\\"}\"]","Board Score":"{\"Player_1_X\":\"60\",\"Player_1_Y\":\"550\",\"Player_2_X\":\"700\",\"Player_2_Y\":\"550\",\"Score_1_Player\":\"Score_1_Player\",\"Score_2_Player\":\"Score_2_Player\",\"Score_3_Player\":\"Score_3_Player\",\"Score_4_Player\":\"Score_4_Player\",\"Score_5_Player\":\"Score_5_Player\",\"Score_6_Player\":\"Score_6_Player\",\"Score_7_Player\":\"Score_7_Player\",\"Score_8_Player\":\"Score_8_Player\",\"Score_9_Player\":\"Score_9_Player\",\"Score_1_Enemy\":\"Score_1_Enemy\",\"Score_2_Enemy\":\"Score_2_Enemy\",\"Score_3_Enemy\":\"Score_3_Enemy\",\"Score_4_Enemy\":\"Score_4_Enemy\",\"Score_5_Enemy\":\"Score_5_Enemy\",\"Score_6_Enemy\":\"Score_6_Enemy\",\"Score_7_Enemy\":\"Score_7_Enemy\",\"Score_8_Enemy\":\"Score_8_Enemy\",\"Score_9_Enemy\":\"Score_9_Enemy\"}","After Match":"{\"AfterGameBackground\":\"AfterGameBackground\",\"Player_1_X\":\"105\",\"Player_1_Y\":\"230\",\"Player_2_X\":\"105\",\"Player_2_Y\":\"500\",\"Distance_Cards\":\"150\"}","Album":"{\"AlbumBackground\":\"Album_Back\",\"Use_Window\":\"false\",\"HelpText\":\"Choose your cards!\",\"LowCards\":\"Not enough Cards!\",\"Distance\":\"150\",\"Cards_Hand_X\":\"100\",\"Cards_Hand_Y\":\"200\",\"TotalOwned\":\"Total Owned:\",\"TotalPower\":\"Total Power:\",\"Rarity\":\"Rarity:\",\"Price\":\"Price:\",\"Description\":\"Description:\"}","Album Positions":"{\"Total Owned X\":\"0\",\"Total Owned Y\":\"42\",\"Total Power X\":\"0\",\"Total Power Y\":\"0\",\"Rarity X\":\"0\",\"Rarity Y\":\"84\",\"Price X\":\"0\",\"Price Y\":\"126\",\"Description X\":\"0\",\"Description Y\":\"168\",\"Card Position X\":\"350\",\"Card Position Y\":\"100\"}","Rules":"{\"Rules\":\"Rules\",\"Plus\":\"Plus Rule :\",\"Same\":\"Same Rule :\",\"Combo\":\"Combo Rule :\",\"PlusWall\":\"Plus Wall Rule :\",\"SameWall\":\"Same Wall Rule :\",\"WinCon\":\"Win Condition\",\"One\":\"\\\"One -\\\\nWinner chooses a card\\\"\",\"Direct\":\"\\\"Direct - \\\\n Winner takes its cards \\\\ncolor\\\"\",\"All\":\"\\\"All - \\\\n Winner takes it all\\\"\",\"Yes\":\"Yes\",\"No\":\"No\"}","Enemy Creation":"[\"{\\\"bgm_music\\\":\\\"Battle1\\\",\\\"Id\\\":\\\"0\\\",\\\"enemyHand\\\":\\\"[\\\\\\\"4\\\\\\\",\\\\\\\"3\\\\\\\",\\\\\\\"4\\\\\\\",\\\\\\\"1\\\\\\\",\\\\\\\"2\\\\\\\",\\\\\\\"2\\\\\\\"]\\\",\\\"enemyReserveCards\\\":\\\"[\\\\\\\"0\\\\\\\",\\\\\\\"1\\\\\\\"]\\\",\\\"winCondition\\\":\\\"2\\\",\\\"SuddenDeath\\\":\\\"false\\\",\\\"Plus\\\":\\\"true\\\",\\\"Same\\\":\\\"false\\\",\\\"Combo\\\":\\\"false\\\",\\\"PlusWall\\\":\\\"false\\\",\\\"SameWall\\\":\\\"false\\\",\\\"Difficulty\\\":\\\"0\\\",\\\"HideCard\\\":\\\"false\\\"}\",\"{\\\"bgm_music\\\":\\\"Battle1\\\",\\\"Id\\\":\\\"1\\\",\\\"enemyHand\\\":\\\"[\\\\\\\"0\\\\\\\",\\\\\\\"0\\\\\\\",\\\\\\\"2\\\\\\\",\\\\\\\"3\\\\\\\",\\\\\\\"4\\\\\\\"]\\\",\\\"enemyReserveCards\\\":\\\"[\\\\\\\"3\\\\\\\",\\\\\\\"2\\\\\\\"]\\\",\\\"winCondition\\\":\\\"2\\\",\\\"SuddenDeath\\\":\\\"false\\\",\\\"Plus\\\":\\\"false\\\",\\\"Same\\\":\\\"false\\\",\\\"Combo\\\":\\\"false\\\",\\\"PlusWall\\\":\\\"false\\\",\\\"SameWall\\\":\\\"false\\\",\\\"Difficulty\\\":\\\"1\\\",\\\"HideCard\\\":\\\"false\\\"}\",\"{\\\"bgm_music\\\":\\\"Battle1\\\",\\\"Id\\\":\\\"2\\\",\\\"enemyHand\\\":\\\"[\\\\\\\"5\\\\\\\",\\\\\\\"6\\\\\\\",\\\\\\\"2\\\\\\\",\\\\\\\"3\\\\\\\",\\\\\\\"4\\\\\\\"]\\\",\\\"enemyReserveCards\\\":\\\"[\\\\\\\"6\\\\\\\",\\\\\\\"5\\\\\\\"]\\\",\\\"winCondition\\\":\\\"3\\\",\\\"SuddenDeath\\\":\\\"true\\\",\\\"Plus\\\":\\\"true\\\",\\\"Same\\\":\\\"true\\\",\\\"Combo\\\":\\\"true\\\",\\\"PlusWall\\\":\\\"true\\\",\\\"SameWall\\\":\\\"true\\\",\\\"Difficulty\\\":\\\"2\\\",\\\"HideCard\\\":\\\"false\\\"}\",\"{\\\"bgm_music\\\":\\\"Battle1\\\",\\\"Id\\\":\\\"3\\\",\\\"enemyHand\\\":\\\"[\\\\\\\"7\\\\\\\",\\\\\\\"8\\\\\\\",\\\\\\\"9\\\\\\\",\\\\\\\"0\\\\\\\",\\\\\\\"4\\\\\\\"]\\\",\\\"enemyReserveCards\\\":\\\"[\\\\\\\"9\\\\\\\",\\\\\\\"8\\\\\\\",\\\\\\\"7\\\\\\\"]\\\",\\\"winCondition\\\":\\\"0\\\",\\\"SuddenDeath\\\":\\\"true\\\",\\\"Plus\\\":\\\"true\\\",\\\"Same\\\":\\\"true\\\",\\\"Combo\\\":\\\"true\\\",\\\"PlusWall\\\":\\\"true\\\",\\\"SameWall\\\":\\\"true\\\",\\\"Difficulty\\\":\\\"3\\\",\\\"HideCard\\\":\\\"true\\\"}\",\"{\\\"bgm_music\\\":\\\"Battle1\\\",\\\"Id\\\":\\\"4\\\",\\\"enemyHand\\\":\\\"[\\\\\\\"9\\\\\\\",\\\\\\\"10\\\\\\\",\\\\\\\"11\\\\\\\",\\\\\\\"11\\\\\\\",\\\\\\\"8\\\\\\\"]\\\",\\\"enemyReserveCards\\\":\\\"[\\\\\\\"11\\\\\\\",\\\\\\\"8\\\\\\\",\\\\\\\"10\\\\\\\",\\\\\\\"9\\\\\\\"]\\\",\\\"winCondition\\\":\\\"2\\\",\\\"SuddenDeath\\\":\\\"true\\\",\\\"Plus\\\":\\\"true\\\",\\\"Same\\\":\\\"true\\\",\\\"Combo\\\":\\\"true\\\",\\\"PlusWall\\\":\\\"true\\\",\\\"SameWall\\\":\\\"true\\\",\\\"Difficulty\\\":\\\"4\\\",\\\"HideCard\\\":\\\"true\\\"}\"]","Extras":"{\"Album Back Button\":\"ExtraBackBtn\",\"Album Back Button X\":\"40\",\"Album Back Button Y\":\"20\",\"Album Duel Button\":\"ExtraDuelBtn\",\"Album Duel Button X\":\"640\",\"Album Duel Button Y\":\"20\",\"Duel Back Button\":\"ExtraBackBtn\",\"Duel Back Button X\":\"2000\",\"Duel Back Button Y\":\"100\",\"Duel Option Button\":\"ExtraOptionBtn\",\"Duel Option Button X\":\"2000\",\"Duel Option Button Y\":\"100\"}"}},
{"name":"DragonSmoothCamera","status":false,"description":"It provides some functions to make your game's camera smoother and more functional.","parameters":{"slideCoefficient":"1920","cameraOffset":"{\"x\": \"0\", \"y\": \"0\"}","dinamicCameraOffset":"false","charDirVariableName":"_direction","cameraOffsetbyDir":"{\"1\":\"{\\\"x\\\": \\\"-60\\\", \\\"y\\\": \\\"60\\\"}\",\"2\":\"{\\\"x\\\": \\\"0\\\", \\\"y\\\": \\\"60\\\"}\",\"3\":\"{\\\"x\\\": \\\"60\\\", \\\"y\\\": \\\"60\\\"}\",\"4\":\"{\\\"x\\\": \\\"-60\\\", \\\"y\\\": \\\"0\\\"}\",\"6\":\"{\\\"x\\\": \\\"60\\\", \\\"y\\\": \\\"0\\\"}\",\"7\":\"{\\\"x\\\": \\\"-60\\\", \\\"y\\\": \\\"-60\\\"}\",\"8\":\"{\\\"x\\\": \\\"0\\\", \\\"y\\\": \\\"-60\\\"}\",\"9\":\"{\\\"x\\\": \\\"60\\\", \\\"y\\\": \\\"-60\\\"}\"}"}},
{"name":"IgnisDebugControl","status":true,"description":"Debug control for developing","parameters":{"DebugWindow":"false"}},
{"name":"IgnisBoosterPack","status":true,"description":"Ignis Collectible Cards, Compatible with Triple Triad MZ.","parameters":{"Booster Pack Configuration":"[\"{\\\"cards\\\":\\\"[\\\\\\\"0\\\\\\\",\\\\\\\"1\\\\\\\",\\\\\\\"2\\\\\\\",\\\\\\\"4\\\\\\\",\\\\\\\"5\\\\\\\",\\\\\\\"6\\\\\\\",\\\\\\\"7\\\\\\\",\\\\\\\"8\\\\\\\"]\\\",\\\"boosterImage\\\":\\\"BoosterPack\\\"}\"]","Booster Scene Configuration":"{\"card positions\":\"[\\\"{\\\\\\\"xPos\\\\\\\":\\\\\\\"-200\\\\\\\",\\\\\\\"yPos\\\\\\\":\\\\\\\"-100\\\\\\\"}\\\",\\\"{\\\\\\\"xPos\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"yPos\\\\\\\":\\\\\\\"-100\\\\\\\"}\\\",\\\"{\\\\\\\"xPos\\\\\\\":\\\\\\\"200\\\\\\\",\\\\\\\"yPos\\\\\\\":\\\\\\\"-100\\\\\\\"}\\\",\\\"{\\\\\\\"xPos\\\\\\\":\\\\\\\"-200\\\\\\\",\\\\\\\"yPos\\\\\\\":\\\\\\\"100\\\\\\\"}\\\",\\\"{\\\\\\\"xPos\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"yPos\\\\\\\":\\\\\\\"100\\\\\\\"}\\\",\\\"{\\\\\\\"xPos\\\\\\\":\\\\\\\"200\\\\\\\",\\\\\\\"yPos\\\\\\\":\\\\\\\"100\\\\\\\"}\\\"]\",\"AnimationBooster\":\"97\",\"AnimationOpen\":\"40\",\"BackImage\":\"Night\",\"BackCard\":\"Back_Card\"}","Card Configuration":"[\"{\\\"Image_Player_1\\\":\\\"Loki\\\",\\\"Rarity\\\":\\\"3\\\",\\\"gainItem\\\":\\\"6\\\"}\",\"{\\\"Image_Player_1\\\":\\\"Loki\\\",\\\"Rarity\\\":\\\"5\\\",\\\"gainItem\\\":\\\"6\\\"}\",\"{\\\"Image_Player_1\\\":\\\"Loki\\\",\\\"Rarity\\\":\\\"5\\\",\\\"gainItem\\\":\\\"6\\\"}\"]"}}
];
