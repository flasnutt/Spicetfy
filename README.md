# 6 custom Spicetify themes

| Theme     | Schemes             |
|-----------|---------------------|
| Tidepool  | ink, reef           |
| Riso      | paper, blueprint    |
| Blueprint | blueprint           |
| Petal     | petal               |
| Terminal  | amber, phosphor     |
| Orchid    | dusk, petal         |

## One-time setup
spicetify config inject_css 1 replace_colors 1 overwrite_assets 1 inject_theme_js 1

## Apply (first time use `spicetify backup apply`, afterwards `spicetify apply`)
spicetify config current_theme Tidepool color_scheme ink; spicetify apply
spicetify config current_theme Tidepool color_scheme reef; spicetify apply
spicetify config current_theme Riso color_scheme paper; spicetify apply
spicetify config current_theme Riso color_scheme blueprint; spicetify apply
spicetify config current_theme Blueprint color_scheme blueprint; spicetify apply
spicetify config current_theme Petal color_scheme petal; spicetify apply
spicetify config current_theme Terminal color_scheme amber; spicetify apply
spicetify config current_theme Terminal color_scheme phosphor; spicetify apply
spicetify config current_theme Orchid color_scheme dusk; spicetify apply
spicetify config current_theme Orchid color_scheme petal; spicetify apply
