{
	"file_path": "C:\\Users\\Sofia\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\Ender Elevators\\commands\\OMNIMK3\\tp_down_omni_mk4.js",
	"file_type": "custom_command",
	"format_version": 0,
	"file_uuid": "3fc7e109_98fc_4f82_a7ba_939bcd7659c2",
	"file_version": 116,
	"cache_content": "Bridge.register(class Command {\n\tstatic command_name = 'teleDownOmniMK4'\n\tonApply() {\n\n\t\tlet h = 129;\n\t\tlet count = 0;\n\t\tlet setupCommands = new Array();\n\n\t\tfor (let i = 4; i <= h; i++) {\n\t\t\tlet tpUp = \"execute @s[scores={y=\"+i+\"}] ~~~ tp @s ~~-\" + i + \"~ true\";\n\t\t\tsetupCommands[0 + (count * 2)] = tpUp;\n\t\t\tlet clean = \"execute @s[scores={y=\"+i+\"}] ~~~ scoreboard players set @s y 0\"\n\t\t\tsetupCommands[1 + (count * 2)] = clean;\n\t\t\tcount++;\n\t\t}\n\n\t\treturn setupCommands;\n\n\t}\n\tonPropose() { }\n})"
}