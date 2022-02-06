{
	"file_path": "C:\\Users\\Sofia\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\Ender Elevators\\commands\\MK2\\tp_up_mk2.js",
	"file_type": "custom_command",
	"format_version": 0,
	"file_uuid": "6c922aa8_bb5e_42fe_a08b_6cf98786ce2b",
	"file_version": 122,
	"cache_content": "Bridge.register(class Command {\n\tstatic command_name = 'teleUpMK2'\n\tonApply() {\n\n\t\tlet h = 32;\n\t\tlet setupCommands = new Array();\n\t\tlet count = 0;\n\n\t\tfor (let i = 3; i <= h; i++) {\n\t\t\tlet tpUp = \"execute @s[scores={y=\"+i+\"}] ~~~ tp @s ~~\" + i + \"~ true\";\n\t\t\tsetupCommands[0 + (count * 2)] = tpUp;\n\t\t\tlet clean = \"execute @s[scores={y=\"+i+\"}] ~~~ scoreboard players set @s y 0\"\n\t\t\tsetupCommands[1 + (count * 2)] = clean;\n\t\t\tcount++;\n\t\t}\n\n\t\treturn setupCommands;\n\n\t}\n\tonPropose() { }\n})"
}