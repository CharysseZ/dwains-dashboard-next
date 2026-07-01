export type Lang = 'en' | 'nl' | 'zh';

export const TRANSLATIONS: Record<Lang, Record<string, string>> = {
  en: {
    // Common
    'common.save': '保存',
    'common.back': '返回',
    'common.close': '关闭',
    'common.add': '添加',
    'common.next': '下一步',
    'common.edit': '编辑',
    'common.delete': '删除',

    // Sidebar
    'sidebar.home': '首页',
    'sidebar.add_blueprint': '添加蓝图',
    'sidebar.dashboard_settings': '仪表板设置',
    'sidebar.section_title': 'Dwains Dashboard',
    'sidebar.areas': '区域',

    // Favorites
    'favorites.title': '收藏',

    // Person status
    'person.home': '在家',
    'person.away': '外出',
    'person.home_count': '{count} 人在家',
    'person.nobody_home': '无人在家',
    'person.home_ratio': '{on}/{total} 在家',

    // Layout card — custom cards / pages / edit toggles
    'layout.custom_cards': '自定义卡片',
    'layout.add_card': '添加卡片',
    'layout.done_editing': '完成编辑',
    'layout.edit_custom_cards': '编辑自定义卡片',
    'layout.custom_cards_top': '区域顶部',
    'layout.custom_cards_after': '{section} 下方',
    'layout.custom_cards_bottom': '区域底部',
    'layout.drag_card': '拖动卡片',
    'layout.edit_page': '编辑页面',
    'layout.page_settings': '设置 / 重新填写',
    'layout.delete_page': '删除页面',
    'layout.delete_page_confirm': '删除页面 "{name}"?',
    'layout.delete_card_confirm': '删除此卡片?',
    'layout.save_page_failed': '无法保存页面 (查看控制台):\n{error}',
    'layout.save_card_failed': '无法保存卡片 (查看控制台):\n{error}',

    // Blueprint page (tab) wrapper
    'page.add_title': '添加蓝图页面',
    'page.add_desc': '导入蓝图作为顶部菜单中的新标签页。',

    // Blueprint dialog
    'blueprint.title_add': '添加蓝图',
    'blueprint.title_setup': '设置蓝图',
    'blueprint.title_edit': '编辑页面',
    'blueprint.tab_paste': '粘贴',
    'blueprint.tab_url': '从 URL',
    'blueprint.tab_gallery': '画廊',
    'blueprint.gallery_hint': '从官方列表中选择一个蓝图。',
    'blueprint.gallery_empty': '未找到蓝图。',
    'blueprint.gallery_failed': '无法加载蓝图列表: {error}',
    'blueprint.paste_hint': '在此粘贴完整的蓝图 YAML (page.yaml)。',
    'blueprint.url_hint_html':
      '粘贴 GitHub URL 到 <code>page.yaml</code> (或其文件夹)。我将自动获取蓝图。',
    'blueprint.loading': '加载中…',
    'blueprint.fetch': '获取',
    'blueprint.invalid_url': '请输入有效的 URL。',
    'blueprint.fetch_failed': '获取失败 (HTTP {status})。',
    'blueprint.load_failed':
      "无法加载蓝图: {error}。提示: 使用 page.yaml 文件的 'raw' URL 或粘贴 YAML。",
    'blueprint.fill_failed': '填写失败: {error}',
    'blueprint.new_page': '新页面',
    'blueprint.page_fallback': '页面',
    'blueprint.missing_cards':
      '这些卡片似乎尚未安装: {cards}。请通过 HACS 安装，否则这些卡片将保持空白。',
    'blueprint.page_name': '页面名称',
    'blueprint.sidebar_icon': '侧边栏图标',
    'blueprint.settings': '设置',
    'blueprint.no_fields': '此蓝图没有可配置的字段。',
    'blueprint.edit_yaml': '编辑 YAML',
    'blueprint.apply': '应用',
    'blueprint.check_update': '检查更新',
    'blueprint.checking': '检查中…',
    'blueprint.up_to_date': '已是最新版本 (v{version})。',
    'blueprint.update_available': '有新版本可用: v{new} (当前 v{current})。',
    'blueprint.source_missing':
      '未找到源 URL，且在画廊中未找到匹配的官方蓝图。',
    'blueprint.update': '更新',

    // Card editor dialog
    'card_editor.title_add': '添加卡片',
    'card_editor.title_setup': '设置卡片',
    'card_editor.title_edit': '编辑卡片',
    'card_editor.search': '搜索卡片',
    'card_editor.visual_editor': '可视化编辑器',
    'card_editor.code_editor': '代码编辑器',
    'card_editor.loading': '加载编辑器…',
    'card_editor.preview': '预览',
    'card_editor.no_preview': '此卡片类型无预览。',

    // Card types
    'card_type.tile.label': '磁贴',
    'card_type.tile.desc': '带快速控制的单个实体紧凑卡片。',
    'card_type.entities.label': '实体列表',
    'card_type.entities.desc': '带状态和控制的实体列表。',
    'card_type.button.label': '按钮',
    'card_type.button.desc': '用于切换实体的大按钮。',
    'card_type.gauge.label': '仪表盘',
    'card_type.gauge.desc': '以仪表盘形式显示数值。',
    'card_type.history.label': '图表',
    'card_type.history.desc': '实体历史图表。',
    'card_type.sensor.label': '传感器',
    'card_type.sensor.desc': '带可选图表的传感器值。',
    'card_type.thermostat.label': '恒温器',
    'card_type.thermostat.desc': '气候实体的控制。',
    'card_type.weather.label': '天气',
    'card_type.weather.desc': '天气预报。',
    'card_type.markdown.label': 'Markdown',
    'card_type.markdown.desc': '带格式和模板的自由文本。',
    'card_type.picture.label': '图片',
    'card_type.picture.desc': '显示图像或摄像头。',
    'card_type.glance.label': '概览',
    'card_type.glance.desc': '多个实体的紧凑概览。',
    'card_type.media.label': '媒体',
    'card_type.media.desc': '媒体播放器控制。',
    'card_type.manual.label': '手动 (YAML)',
    'card_type.manual.desc': '手动输入或粘贴任何卡片的 YAML。',

    // Strategy editor
    'strategy.dashboard_desc': '调整此仪表板的名称和侧边栏图标。',
    'strategy.name': '名称',
    'strategy.sidebar_icon': '侧边栏图标',
    'strategy.back': '返回',
    'strategy.save_name_failed': '保存名称/图标失败 (查看控制台):\n{error}',
    'strategy.edit_area_alert': '打开 Home Assistant 设置 > 区域与区域来编辑区域。',

    // Devices page
    'devices.title': '设备',
    'devices.empty': '未找到设备。',
    'devices.maintenance': '维护',
    'devices.energy': '能源',
    'devices.overview': '概览',
    'devices.all_groups': '所有设备组',
    'devices.new_devices': '新设备',
    'devices.new_device_one': '1 个新设备',
    'devices.new_devices_count': '{count} 个新设备',
    'devices.power_sensor_one': '1 个实时功率传感器',
    'devices.power_sensors_count': '{count} 个实时功率传感器',

    // Home sections
    'home_section.summaries.label': '摘要',
    'home_section.summaries.desc': '来自 Home Assistant 的维修、更新和新发现设备。',
    'home_section.cameras.label': '摄像头',
    'home_section.cameras.desc': '首页上的区域摄像头。',
    'home_section.areas.label': '区域',
    'home_section.areas.desc': '移动端和小屏幕房间卡片；桌面端使用左侧区域菜单。',
    'home_section.devices.label': '房屋信息',
    'home_section.devices.desc': '人员、室内气候、电力使用和设备组。',
    'home_section.favorites.label': '收藏',
    'home_section.favorites.desc': '您选择的固定实体。',

    // Home information cards
    'home_card.people.label': '人员',
    'home_card.people.desc': '家中人员的存在状态卡片。',
    'home_card.climate.label': '室内气候',
    'home_card.climate.desc': '房间传感器的平均温度和湿度。',
    'home_card.power.label': '房屋用电',
    'home_card.power.desc': '当前全屋用电和耗电最高的房间。',
    'home_card.device_groups.label': '设备组',
    'home_card.device_groups.desc': '灯光、开关、窗帘和运动等状态卡片。',

    // Settings - Home layout
    'settings.home_layout.title': '首页布局',
    'settings.home_layout.desc': '选择首页各区域的顺序。',
    'settings.home_layout.reset': '重置默认布局',
    'settings.home_layout.hide_section': '隐藏区域',
    'settings.home_layout.show_section': '显示区域',
    'settings.home_layout.move_up': '上移',
    'settings.home_layout.move_down': '下移',

    // Settings - House information cards
    'settings.house_info.title': '房屋信息卡片',
    'settings.house_info.desc': '选择首页房屋信息区域中显示哪些卡片。',
    'settings.house_info.visible': '{visible}/{total} 可见',

    // Settings - Device visibility
    'settings.device_visibility.title': '设备可见性',
    'settings.device_visibility.desc': '配置实体和设备类型组的显示方式。',
    'settings.device_visibility.hidden': '隐藏设备',
    'settings.device_visibility.no_devices': '未找到具有可见实体的设备。',
    'settings.device_visibility.visible_in_dd': '在 DD 中可见',
    'settings.device_visibility.hidden_in_dd': '在 DD 中隐藏',

    // Entity count
    'entity.count': '{count} 个实体',
    'entity.count.one': '1 个实体',

    // Settings overview items
    'settings.overview.dashboard': '仪表板',
    'settings.overview.dashboard_desc': '调整此仪表板的名称和侧边栏图标。',
    'settings.overview.home': '首页',
    'settings.overview.home_desc': '配置首页布局和房屋信息卡片。',
    'settings.overview.header': '顶部栏',
    'settings.overview.header_desc': '选择顶部栏中显示的设备状态和信息。',
    'settings.overview.devices': '设备',
    'settings.overview.devices_desc': '配置设备类型组的显示方式。',
    'settings.overview.people': '人员',
    'settings.overview.people_desc': '管理家庭成员的可见性。',
    'settings.overview.areas': '区域',
    'settings.overview.areas_desc': '配置哪些区域可见、显示顺序以及房间实体的过滤方式。',
    'settings.overview.replacements': '替换',
    'settings.overview.replacements_desc': '管理蓝图替换规则。',
    'settings.overview.permissions': '权限',
    'settings.overview.permissions_desc': '配置非管理员用户的访问限制。',
    'settings.overview.support': '支持',
    'settings.overview.support_desc': '获取帮助和支持信息。',

    // Hide unavailable settings
    'settings.hide_unavailable.devices': '在设备页面隐藏不可用/未知实体',
    'settings.hide_unavailable.areas': '在区域视图中隐藏不可用/未知实体',
    'settings.hide_unavailable.desc': '默认启用。状态为"unavailable"或"unknown"的实体从房间卡片中隐藏。当存在隐藏实体时，Dwains Dashboard 会在房间标题中显示一个注意徽章。',

    // Favorites settings
    'settings.favorites.title': '收藏',
    'settings.favorites.desc': '选择您希望始终在首页看到的实体。',
    'settings.favorites.suggestions': '在您固定的收藏旁边添加 Home Assistant 预测您经常使用的实体。',

    // Maintenance view
    'maintenance.title': '维护',

    // Energy view
    'energy.title': '能源',
    'energy.desc': '当 Home Assistant 具有 W、kW 或 MW 单位的可见功率传感器时，能源信息将显示在此处。',
    'energy.whole_house': '全屋',
    'energy.whole_house_history': '全屋用电历史',
    'energy.usage_by_area': '各区域实时用电',
    'energy.top_area': '耗电最高区域',
    'energy.no_sensors': '未找到实时功率传感器',
  },
  nl: {
    // Common
    'common.save': 'Opslaan',
    'common.back': 'Terug',
    'common.close': 'Sluiten',
    'common.add': 'Toevoegen',
    'common.next': 'Volgende',
    'common.edit': 'Bewerken',
    'common.delete': 'Verwijderen',

    // Sidebar
    'sidebar.home': 'Home',
    'sidebar.add_blueprint': 'Blueprint toevoegen',
    'sidebar.dashboard_settings': 'Dashboard-instellingen',
    'sidebar.section_title': 'Dwains Dashboard',
    'sidebar.areas': 'Ruimtes',

    // Favorites
    'favorites.title': 'Favorieten',

    // Person status
    'person.home': 'Home',
    'person.away': 'Away',
    'person.home_count': '{count} home',
    'person.nobody_home': 'Nobody home',
    'person.home_ratio': '{on}/{total} home',

    // Layout card — custom cards / pages / edit toggles
    'layout.custom_cards': 'Eigen kaarten',
    'layout.add_card': 'Kaart toevoegen',
    'layout.done_editing': 'Klaar met bewerken',
    'layout.edit_custom_cards': 'Eigen kaarten bewerken',
    'layout.custom_cards_top': 'Bovenaan ruimte',
    'layout.custom_cards_after': 'Onder {section}',
    'layout.custom_cards_bottom': 'Onderaan ruimte',
    'layout.drag_card': 'Kaart verslepen',
    'layout.edit_page': 'Pagina bewerken',
    'layout.page_settings': 'Instellingen / opnieuw invullen',
    'layout.delete_page': 'Pagina verwijderen',
    'layout.delete_page_confirm': 'Pagina "{name}" verwijderen?',
    'layout.delete_card_confirm': 'Deze kaart verwijderen?',
    'layout.save_page_failed': 'Kon de pagina niet opslaan (zie console):\n{error}',
    'layout.save_card_failed': 'Kon de kaart niet opslaan (zie console):\n{error}',

    // Blueprint page (tab) wrapper
    'page.add_title': 'Blueprint-pagina toevoegen',
    'page.add_desc': 'Importeer een blueprint om hem als nieuwe tab in het hoofdmenu te zetten.',

    // Blueprint dialog
    'blueprint.title_add': 'Blueprint toevoegen',
    'blueprint.title_setup': 'Blueprint instellen',
    'blueprint.title_edit': 'Pagina bewerken',
    'blueprint.tab_paste': 'Plakken',
    'blueprint.tab_url': 'Van URL',
    'blueprint.tab_gallery': 'Galerij',
    'blueprint.gallery_hint': 'Kies een blueprint uit de officiële lijst.',
    'blueprint.gallery_empty': 'Geen blueprints gevonden.',
    'blueprint.gallery_failed': 'Kon de blueprint-lijst niet laden: {error}',
    'blueprint.paste_hint': 'Plak hier de volledige blueprint-YAML (page.yaml).',
    'blueprint.url_hint_html':
      'Plak een GitHub-URL naar het <code>page.yaml</code> (of de map ervan). Ik haal de blueprint automatisch op.',
    'blueprint.loading': 'Laden…',
    'blueprint.fetch': 'Ophalen',
    'blueprint.invalid_url': 'Geef een geldige URL op.',
    'blueprint.fetch_failed': 'Ophalen mislukt (HTTP {status}).',
    'blueprint.load_failed':
      "Kon de blueprint niet laden: {error}. Tip: gebruik de 'raw' URL van het page.yaml-bestand of plak de YAML.",
    'blueprint.fill_failed': 'Invullen mislukt: {error}',
    'blueprint.new_page': 'Nieuwe pagina',
    'blueprint.page_fallback': 'Pagina',
    'blueprint.missing_cards':
      'Deze kaart(en) lijken nog niet geïnstalleerd: {cards}. Installeer ze via HACS, anders blijven die kaarten leeg.',
    'blueprint.page_name': 'Paginanaam',
    'blueprint.sidebar_icon': 'Icoon in zijbalk',
    'blueprint.settings': 'Instellingen',
    'blueprint.no_fields': 'Deze blueprint heeft geen instelbare velden.',
    'blueprint.edit_yaml': 'YAML bewerken',
    'blueprint.apply': 'Toepassen',
    'blueprint.check_update': 'Controleer op update',
    'blueprint.checking': 'Controleren…',
    'blueprint.up_to_date': 'Al up-to-date (v{version}).',
    'blueprint.update_available': 'Nieuwe versie beschikbaar: v{new} (huidig v{current}).',
    'blueprint.source_missing':
      'Geen bron-URL gevonden en geen match met een officiële blueprint in de galerij.',
    'blueprint.update': 'Bijwerken',

    // Card editor dialog
    'card_editor.title_add': 'Kaart toevoegen',
    'card_editor.title_setup': 'Kaart instellen',
    'card_editor.title_edit': 'Kaart bewerken',
    'card_editor.search': 'Zoek kaart',
    'card_editor.visual_editor': 'Visuele editor',
    'card_editor.code_editor': 'Code-editor',
    'card_editor.loading': 'Editor laden…',
    'card_editor.preview': 'Voorbeeld',
    'card_editor.no_preview': 'Geen voorbeeld voor dit kaarttype.',

    // Card types
    'card_type.tile.label': 'Tegel',
    'card_type.tile.desc': 'Compacte kaart voor één entiteit met snelle bediening.',
    'card_type.entities.label': 'Entiteiten',
    'card_type.entities.desc': 'Lijst van entiteiten met status en bediening.',
    'card_type.button.label': 'Knop',
    'card_type.button.desc': 'Grote knop om een entiteit te schakelen.',
    'card_type.gauge.label': 'Meter',
    'card_type.gauge.desc': 'Toont een numerieke waarde als meter.',
    'card_type.history.label': 'Grafiek',
    'card_type.history.desc': 'Historische grafiek van entiteiten.',
    'card_type.sensor.label': 'Sensor',
    'card_type.sensor.desc': 'Sensorwaarde met optionele grafiek.',
    'card_type.thermostat.label': 'Thermostaat',
    'card_type.thermostat.desc': 'Bediening voor een klimaat-entiteit.',
    'card_type.weather.label': 'Weer',
    'card_type.weather.desc': 'Weersvoorspelling.',
    'card_type.markdown.label': 'Markdown',
    'card_type.markdown.desc': 'Vrije tekst met opmaak en templates.',
    'card_type.picture.label': 'Afbeelding',
    'card_type.picture.desc': 'Toont een afbeelding of camera.',
    'card_type.glance.label': 'Glance',
    'card_type.glance.desc': 'Compact overzicht van meerdere entiteiten.',
    'card_type.media.label': 'Media',
    'card_type.media.desc': 'Bediening voor een mediaspeler.',
    'card_type.manual.label': 'Handmatig (YAML)',
    'card_type.manual.desc': 'Typ of plak zelf de YAML voor elke kaart.',

    // Strategy editor
    'strategy.dashboard_desc': 'Pas de naam en het zijbalk-icoon van dit dashboard aan.',
    'strategy.name': 'Naam',
    'strategy.sidebar_icon': 'Zijbalk-icoon',
    'strategy.back': 'Terug',
    'strategy.save_name_failed': 'Naam/icoon opslaan mislukt (zie console):\n{error}',
    'strategy.edit_area_alert':
      'Open Home Assistant settings > Areas & zones to edit the area.',

    // Devices page
    'devices.title': 'Apparaten',
    'devices.empty': 'Geen apparaten gevonden.',
    'devices.maintenance': 'Onderhoud',
    'devices.energy': 'Energie',
    'devices.overview': 'Overzicht',
    'devices.all_groups': 'Alle apparaatgroepen',
    'devices.new_devices': 'Nieuwe apparaten',
    'devices.new_device_one': '1 nieuw apparaat',
    'devices.new_devices_count': '{count} nieuwe apparaten',
    'devices.power_sensor_one': '1 actieve vermogenssensor',
    'devices.power_sensors_count': '{count} actieve vermogenssensoren',

    // Home sections
    'home_section.summaries.label': 'Samenvattingen',
    'home_section.summaries.desc': 'Reparaties, updates en nieuw ontdekte apparaten uit Home Assistant.',
    'home_section.cameras.label': 'Camera\'s',
    'home_section.cameras.desc': 'Ruimtecamera\'s op de startpagina.',
    'home_section.areas.label': 'Ruimtes',
    'home_section.areas.desc': 'Kamerkarten voor mobiel en kleine schermen; desktop gebruikt het linker ruimtemenu.',
    'home_section.devices.label': 'Huisinformatie',
    'home_section.devices.desc': 'Personen, binnenklimaat, stroomverbruik en apparaatgroepen.',
    'home_section.favorites.label': 'Favorieten',
    'home_section.favorites.desc': 'Gepinde entiteiten die u hebt gekozen.',

    // Home information cards
    'home_card.people.label': 'Personen',
    'home_card.people.desc': 'Aanwezigheidskaarten voor de personen in dit huis.',
    'home_card.climate.label': 'Binnenklimaat',
    'home_card.climate.desc': 'Gemiddelde temperatuur en luchtvochtigheid van kamer sensoren.',
    'home_card.power.label': 'Huisstroomverbruik',
    'home_card.power.desc': 'Huidig stroomverbruik van het hele huis en top kamers.',
    'home_card.device_groups.label': 'Apparaatgroepen',
    'home_card.device_groups.desc': 'Statuskaarten zoals lampen, schakelaars, zonwering en beweging.',

    // Settings - Home layout
    'settings.home_layout.title': 'Homepagina-indeling',
    'settings.home_layout.desc': 'Kies de volgorde van secties op de startpagina.',
    'settings.home_layout.reset': 'Standaardindeling herstellen',
    'settings.home_layout.hide_section': 'Sectie verbergen',
    'settings.home_layout.show_section': 'Sectie tonen',
    'settings.home_layout.move_up': 'Omhoog',
    'settings.home_layout.move_down': 'Omlaag',

    // Settings - House information cards
    'settings.house_info.title': 'Huisinformatie-kaarten',
    'settings.house_info.desc': 'Kies welke kaarten worden getoond in de Huisinformatie-sectie op Home.',
    'settings.house_info.visible': '{visible}/{total} zichtbaar',

    // Settings - Device visibility
    'settings.device_visibility.title': 'Apparaat-zichtbaarheid',
    'settings.device_visibility.desc': 'Configureer hoe entiteiten en apparaatgroepen worden weergegeven.',
    'settings.device_visibility.hidden': 'Verborgen apparaten',
    'settings.device_visibility.no_devices': 'Geen apparaten met zichtbare entiteiten gevonden.',
    'settings.device_visibility.visible_in_dd': 'Zichtbaar in DD',
    'settings.device_visibility.hidden_in_dd': 'Verborgen in DD',

    // Entity count
    'entity.count': '{count} entiteiten',
    'entity.count.one': '1 entiteit',

    // Settings overview items
    'settings.overview.dashboard': 'Dashboard',
    'settings.overview.dashboard_desc': 'Pas de naam en het zijbalk-icoon van dit dashboard aan.',
    'settings.overview.home': 'Home',
    'settings.overview.home_desc': 'Configureer homepagina-indeling en huisinformatie-kaarten.',
    'settings.overview.header': 'Koptekst',
    'settings.overview.header_desc': 'Kies apparaatstatus en informatie die in de bovenbalk worden getoond.',
    'settings.overview.devices': 'Apparaten',
    'settings.overview.devices_desc': 'Configureer hoe apparaatgroepen worden weergegeven.',
    'settings.overview.people': 'Personen',
    'settings.overview.people_desc': 'Beheer zichtbaarheid van huishoudleden.',
    'settings.overview.areas': 'Ruimtes',
    'settings.overview.areas_desc': 'Configureer welke ruimtes zichtbaar zijn, in welke volgorde ze worden getoond en hoe kamerentiteiten worden gefilterd.',
    'settings.overview.replacements': 'Vervangingen',
    'settings.overview.replacements_desc': 'Beheer blueprint-vervangingsregels.',
    'settings.overview.permissions': 'Rechten',
    'settings.overview.permissions_desc': 'Configureer toegangsbeperkingen voor niet-beheerders.',
    'settings.overview.support': 'Ondersteuning',
    'settings.overview.support_desc': 'Ontvang hulp en ondersteuningsinformatie.',

    // Hide unavailable settings
    'settings.hide_unavailable.devices': 'Onbeschikbare/onbekende entiteiten verbergen op Apparaten-pagina',
    'settings.hide_unavailable.areas': 'Onbeschikbare/onbekende entiteiten verbergen in ruimteweergaven',
    'settings.hide_unavailable.desc': 'Standaard ingeschakeld. Entiteiten met "unavailable" of "unknown" statussen worden verborgen in kamerkarten. Wanneer verborgen entiteiten bestaan, toont Dwains Dashboard een aandachtsbadge in de kamerheader.',

    // Favorites settings
    'settings.favorites.title': 'Favorieten',
    'settings.favorites.desc': 'Kies entiteiten die u altijd op de startpagina wilt zien.',
    'settings.favorites.suggestions': 'Voegt entiteiten toe die Home Assistant voorspelt dat u vaak gebruikt naast uw gepinde favorieten.',

    // Maintenance view
    'maintenance.title': 'Onderhoud',

    // Energy view
    'energy.title': 'Energie',
    'energy.desc': 'Energie wordt hier getoond wanneer Home Assistant zichtbare vermogenssensoren heeft met W, kW of MW eenheden.',
    'energy.whole_house': 'Hele huis',
    'energy.whole_house_history': 'Vermogensgeschiedenis hele huis',
    'energy.usage_by_area': 'Actueel vermogensverbruik per ruimte',
    'energy.top_area': 'Top ruimte',
    'energy.no_sensors': 'Geen actieve vermogenssensoren gevonden',
  },
  zh: {
    // Common
    'common.save': '保存',
    'common.back': '返回',
    'common.close': '关闭',
    'common.add': '添加',
    'common.next': '下一步',
    'common.edit': '编辑',
    'common.delete': '删除',

    // Sidebar
    'sidebar.home': '首页',
    'sidebar.add_blueprint': '添加蓝图',
    'sidebar.dashboard_settings': '仪表盘设置',
    'sidebar.section_title': 'Dwains Dashboard',
    'sidebar.areas': '区域',

    // Favorites
    'favorites.title': '收藏',

    // Person status
    'person.home': '在家',
    'person.away': '外出',
    'person.home_count': '{count}人在家',
    'person.nobody_home': '无人在家',
    'person.home_ratio': '{on}/{total}人在家',

    // Layout card — custom cards / pages / edit toggles
    'layout.custom_cards': '自定义卡片',
    'layout.add_card': '添加卡片',
    'layout.done_editing': '完成编辑',
    'layout.edit_custom_cards': '编辑自定义卡片',
    'layout.custom_cards_top': '区域顶部',
    'layout.custom_cards_after': '{section}下方',
    'layout.custom_cards_bottom': '区域底部',
    'layout.drag_card': '拖动卡片',
    'layout.edit_page': '编辑页面',
    'layout.page_settings': '设置 / 重新填写',
    'layout.delete_page': '删除页面',
    'layout.delete_page_confirm': '删除页面 "{name}"？',
    'layout.delete_card_confirm': '删除此卡片？',
    'layout.save_page_failed': '无法保存页面（见控制台）：\n{error}',
    'layout.save_card_failed': '无法保存卡片（见控制台）：\n{error}',

    // Blueprint page (tab) wrapper
    'page.add_title': '添加蓝图页面',
    'page.add_desc': '导入蓝图以在顶部菜单中添加为新标签页。',

    // Blueprint dialog
    'blueprint.title_add': '添加蓝图',
    'blueprint.title_setup': '设置蓝图',
    'blueprint.title_edit': '编辑页面',
    'blueprint.tab_paste': '粘贴',
    'blueprint.tab_url': '来自URL',
    'blueprint.tab_gallery': '画廊',
    'blueprint.gallery_hint': '从官方列表中选择蓝图。',
    'blueprint.gallery_empty': '未找到蓝图。',
    'blueprint.gallery_failed': '无法加载蓝图列表：{error}',
    'blueprint.paste_hint': '在此粘贴完整的蓝图YAML（page.yaml）。',
    'blueprint.url_hint_html':
      '粘贴指向 <code>page.yaml</code>（或其文件夹）的GitHub URL。我会自动获取蓝图。',
    'blueprint.loading': '加载中…',
    'blueprint.fetch': '获取',
    'blueprint.invalid_url': '请输入有效的URL。',
    'blueprint.fetch_failed': '获取失败（HTTP {status}）。',
    'blueprint.load_failed':
      "无法加载蓝图：{error}。提示：使用page.yaml文件的'raw' URL或粘贴YAML。",
    'blueprint.fill_failed': '填写失败：{error}',
    'blueprint.new_page': '新建页面',
    'blueprint.page_fallback': '页面',
    'blueprint.missing_cards':
      '这些卡片似乎尚未安装：{cards}。请通过HACS安装它们，否则这些卡片将保持为空。',
    'blueprint.page_name': '页面名称',
    'blueprint.sidebar_icon': '侧边栏图标',
    'blueprint.settings': '设置',
    'blueprint.no_fields': '此蓝图没有可配置的字段。',
    'blueprint.edit_yaml': '编辑YAML',
    'blueprint.apply': '应用',
    'blueprint.check_update': '检查更新',
    'blueprint.checking': '检查中…',
    'blueprint.up_to_date': '已是最新版本（v{version}）。',
    'blueprint.update_available': '有新版本可用：v{new}（当前v{current}）。',
    'blueprint.source_missing':
      '未找到源URL，且在画廊中未找到匹配的官方蓝图。',
    'blueprint.update': '更新',

    // Card editor dialog
    'card_editor.title_add': '添加卡片',
    'card_editor.title_setup': '设置卡片',
    'card_editor.title_edit': '编辑卡片',
    'card_editor.search': '搜索卡片',
    'card_editor.visual_editor': '可视化编辑器',
    'card_editor.code_editor': '代码编辑器',
    'card_editor.loading': '加载编辑器…',
    'card_editor.preview': '预览',
    'card_editor.no_preview': '此卡片类型没有预览。',

    // Card types
    'card_type.tile.label': '瓦片',
    'card_type.tile.desc': '用于单个实体的紧凑型卡片，带有快速控制。',
    'card_type.entities.label': '实体',
    'card_type.entities.desc': '带有状态和控制的实体列表。',
    'card_type.button.label': '按钮',
    'card_type.button.desc': '用于切换实体的大按钮。',
    'card_type.gauge.label': '仪表',
    'card_type.gauge.desc': '以仪表形式显示数值。',
    'card_type.history.label': '图表',
    'card_type.history.desc': '实体的历史图表。',
    'card_type.sensor.label': '传感器',
    'card_type.sensor.desc': '带有可选图表的传感器值。',
    'card_type.thermostat.label': '恒温器',
    'card_type.thermostat.desc': '气候实体的控制。',
    'card_type.weather.label': '天气',
    'card_type.weather.desc': '天气预报。',
    'card_type.markdown.label': 'Markdown',
    'card_type.markdown.desc': '带格式和模板的自由文本。',
    'card_type.picture.label': '图片',
    'card_type.picture.desc': '显示图片或摄像头。',
    'card_type.glance.label': '概览',
    'card_type.glance.desc': '多个实体的紧凑型概览。',
    'card_type.media.label': '媒体',
    'card_type.media.desc': '媒体播放器的控制。',
    'card_type.manual.label': '手动（YAML）',
    'card_type.manual.desc': '自行输入或粘贴任何卡片的YAML。',

    // Strategy editor
    'strategy.dashboard_desc': '调整此仪表盘的名称和侧边栏图标。',
    'strategy.name': '名称',
    'strategy.sidebar_icon': '侧边栏图标',
    'strategy.back': '返回',
    'strategy.save_name_failed': '保存名称/图标失败（见控制台）：\n{error}',
    'strategy.edit_area_alert': '打开Home Assistant设置 > 区域和区域以编辑区域。',

    // Devices page
    'devices.title': '设备',
    'devices.empty': '未找到设备。',
    'devices.maintenance': '维护',
    'devices.energy': '能源',
    'devices.overview': '概览',
    'devices.all_groups': '所有设备组',
    'devices.new_devices': '新设备',
    'devices.new_device_one': '1个新设备',
    'devices.new_devices_count': '{count}个新设备',
    'devices.power_sensor_one': '1个实时功率传感器',
    'devices.power_sensors_count': '{count}个实时功率传感器',

    // Home sections
    'home_section.summaries.label': '摘要',
    'home_section.summaries.desc': 'Home Assistant的维修、更新和新发现的设备。',
    'home_section.cameras.label': '摄像头',
    'home_section.cameras.desc': '主页上的区域摄像头。',
    'home_section.areas.label': '区域',
    'home_section.areas.desc': '移动设备和小屏幕上的房间卡片；桌面端使用左侧区域菜单。',
    'home_section.devices.label': '房屋信息',
    'home_section.devices.desc': '人员、室内气候、用电情况和设备组。',
    'home_section.favorites.label': '收藏',
    'home_section.favorites.desc': '您选择的固定实体。',

    // Home information cards
    'home_card.people.label': '人员',
    'home_card.people.desc': '家中人员的存在卡片。',
    'home_card.climate.label': '室内气候',
    'home_card.climate.desc': '房间传感器的平均温度和湿度。',
    'home_card.power.label': '房屋用电',
    'home_card.power.desc': '当前全屋用电情况和耗电最高的房间。',
    'home_card.device_groups.label': '设备组',
    'home_card.device_groups.desc': '状态卡片，如灯光、开关、窗帘和运动传感器。',

    // Settings - Home layout
    'settings.home_layout.title': '首页布局',
    'settings.home_layout.desc': '选择首页各区域的显示顺序。',
    'settings.home_layout.reset': '重置默认布局',
    'settings.home_layout.hide_section': '隐藏区域',
    'settings.home_layout.show_section': '显示区域',
    'settings.home_layout.move_up': '上移',
    'settings.home_layout.move_down': '下移',

    // Settings - House information cards
    'settings.house_info.title': '房屋信息卡片',
    'settings.house_info.desc': '选择在首页房屋信息区域内显示哪些卡片。',
    'settings.house_info.visible': '{visible}/{total} 可见',

    // Settings - Device visibility
    'settings.device_visibility.title': '设备可见性',
    'settings.device_visibility.desc': '配置哪些设备类型组在设备页面上显示。',
    'settings.device_visibility.hidden': '隐藏的设备',
    'settings.device_visibility.no_devices': '未找到具有可见实体的设备。',
    'settings.device_visibility.visible_in_dd': '在DD中可见',
    'settings.device_visibility.hidden_in_dd': '在DD中隐藏',

    // Entity count
    'entity.count': '{count} 个实体',
    'entity.count.one': '1 个实体',

    // Settings overview items
    'settings.overview.dashboard': '仪表盘',
    'settings.overview.dashboard_desc': '调整仪表盘名称和侧边栏图标。',
    'settings.overview.home': '首页',
    'settings.overview.home_desc': '配置首页布局和房屋信息卡片。',
    'settings.overview.header': '顶部栏',
    'settings.overview.header_desc': '选择顶部栏显示的设备状态和信息。',
    'settings.overview.devices': '设备',
    'settings.overview.devices_desc': '配置设备类型组的显示方式。',
    'settings.overview.people': '人员',
    'settings.overview.people_desc': '管理家庭成员的可见性。',
    'settings.overview.areas': '区域',
    'settings.overview.areas_desc': '配置哪些区域可见、显示顺序以及房间实体如何过滤。',
    'settings.overview.replacements': '替换',
    'settings.overview.replacements_desc': '管理蓝图替换规则。',
    'settings.overview.permissions': '权限',
    'settings.overview.permissions_desc': '配置非管理员用户的访问限制。',
    'settings.overview.support': '支持',
    'settings.overview.support_desc': '获取帮助和支持信息。',

    // Hide unavailable settings
    'settings.hide_unavailable.devices': '在设备页面隐藏不可用/未知的实体',
    'settings.hide_unavailable.areas': '在区域视图中隐藏不可用/未知的实体',
    'settings.hide_unavailable.desc': '默认启用。具有"unavailable"或"unknown"状态的实体将从房间卡片中隐藏。当存在隐藏实体时，Dwains Dashboard会在房间标题中显示一个提示徽章。',

    // Favorites settings
    'settings.favorites.title': '收藏',
    'settings.favorites.desc': '选择您希望始终在首页上看到的实体。',
    'settings.favorites.suggestions': '添加Home Assistant预测您经常使用的实体到您的固定收藏旁边。',

    // Maintenance view
    'maintenance.title': '维护',

    // Energy view
    'energy.title': '能源',
    'energy.desc': '当Home Assistant具有W、kW或MW单位的可见功率传感器时，能源信息将显示在此处。',
    'energy.whole_house': '全屋',
    'energy.whole_house_history': '全屋用电历史',
    'energy.usage_by_area': '各区域实时用电',
    'energy.top_area': '耗电最高区域',
    'energy.no_sensors': '未找到实时功率传感器',
  },
};
