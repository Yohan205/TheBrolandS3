{
	"file_path": "C:\\Users\\Sofia\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\Ender Elevators\\commands\\MK1\\tp_up_mk1.js",
	"file_type": "custom_command",
	"format_version": 0,
	"file_uuid": "d2727030_4df2_40f9_a92c_e4709359ef51",
	"file_version": 199,
	"cache_content": "Bridge.register(class Command {\n\tstatic command_name = 'teleUpMK1'\n\tonApply() {\n\n\t\tlet h = 16;\n\t\tlet setupCommands = new Array();\n\t\tlet count = 0;\n\n\t\tfor (let i = 3; i <= h; i++) {\n\t\t\tlet tpUp = \"execute @s[scores={y=\"+i+\"}] ~~~ tp @s ~~\" + i + \"~ true\";\n\t\t\tsetupCommands[0 + (count * 2)] = tpUp;\n\t\t\tlet clean = \"execute @s[scores={y=\"+i+\"}] ~~~ scoreboard players set @s y 0\"\n\t\t\tsetupCommands[1 + (count * 2)] = clean;\n\t\t\tcount++;\n\t\t}\n\n\t\treturn setupCommands;\n\n\t}\n\tonPropose() { }\n})"
}