{
	"file_path": "C:\\Users\\Sofia\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\Ender Elevators\\commands\\OMNIMK2\\tp_down_omni_mk3.js",
	"file_type": "custom_command",
	"format_version": 0,
	"file_uuid": "9d09780b_b704_4ed4_9021_66b8e1578fd5",
	"file_version": 115,
	"cache_content": "Bridge.register(class Command {\n\tstatic command_name = 'teleDownOmniMK3'\n\tonApply() {\n\n\t\tlet h = 65;\n\t\tlet count = 0;\n\t\tlet setupCommands = new Array();\n\n\t\tfor (let i = 4; i <= h; i++) {\n\t\t\tlet tpUp = \"execute @s[scores={y=\"+i+\"}] ~~~ tp @s ~~-\" + i + \"~ true\";\n\t\t\tsetupCommands[0 + (count * 2)] = tpUp;\n\t\t\tlet clean = \"execute @s[scores={y=\"+i+\"}] ~~~ scoreboard players set @s y 0\"\n\t\t\tsetupCommands[1 + (count * 2)] = clean;\n\t\t\tcount++;\n\t\t}\n\n\t\treturn setupCommands;\n\n\t}\n\tonPropose() { }\n})"
}