{
	"file_path": "C:\\Users\\Sofia\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\Ender Elevators\\commands\\MK5\\tp_up_mk5.js",
	"file_type": "custom_command",
	"format_version": 0,
	"file_uuid": "6b12c8a2_9dd0_439f_a1cb_4257149082b7",
	"file_version": 130,
	"cache_content": "Bridge.register(class Command {\n\tstatic command_name = 'teleUpMK5'\n\tonApply() {\n\n\t\tlet h = 256;\n\t\tlet setupCommands = new Array();\n\t\tlet count = 0;\n\n\t\tfor (let i = 3; i <= h; i++) {\n\t\t\tlet tpUp = \"execute @s[scores={y=\"+i+\"}] ~~~ tp @s ~~\" + i + \"~ true\";\n\t\t\tsetupCommands[0 + (count * 2)] = tpUp;\n\t\t\tlclean = \"execute @s[scores={y=\"+i+\"}] ~~~ scoreboard players set @s y 0\"\n\t\t\tsetupCommands[1 + (count * 2)] = clean;\n\t\t\tcount++;\n\t\t}\n\n\t\treturn setupCommands;\n\n\t}\n\tonPropose() { }\n})"
}