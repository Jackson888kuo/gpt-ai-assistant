import config from '../config/index.js';

const zh = {
  __COMMAND_ACT_ADVISE_LABEL: '建議',
  __COMMAND_ACT_ADVISE_TEXT: '建議',
  __COMMAND_ACT_ADVISE_PROMPT: '請總結以下內容，並給予適當的建議。',
  __COMMAND_ACT_APOLOGIZE_LABEL: '道歉',
  __COMMAND_ACT_APOLOGIZE_TEXT: '道歉',
  __COMMAND_ACT_APOLOGIZE_PROMPT: '請總結以下內容，並給予誠懇的道歉。',
  __COMMAND_ACT_BLAME_LABEL: '譴責',
  __COMMAND_ACT_BLAME_TEXT: '譴責',
  __COMMAND_ACT_BLAME_PROMPT: '請總結以下內容，並給予嚴厲的譴責。',
  __COMMAND_ACT_COMFORT_LABEL: '安慰',
  __COMMAND_ACT_COMFORT_TEXT: '安慰',
  __COMMAND_ACT_COMFORT_PROMPT: '請總結以下內容，並給予溫暖的安慰。',
  __COMMAND_ACT_COMPLAIN_LABEL: '抱怨',
  __COMMAND_ACT_COMPLAIN_TEXT: '抱怨',
  __COMMAND_ACT_COMPLAIN_PROMPT: '請總結以下內容，並給予輕微的抱怨。',
  __COMMAND_ACT_ENCOURAGE_LABEL: '鼓勵',
  __COMMAND_ACT_ENCOURAGE_TEXT: '鼓勵',
  __COMMAND_ACT_ENCOURAGE_PROMPT: '請總結以下內容，並給予熱烈的鼓勵。',
  __COMMAND_ACT_LAUGH_LABEL: '嘲諷',
  __COMMAND_ACT_LAUGH_TEXT: '嘲諷',
  __COMMAND_ACT_LAUGH_PROMPT: '請總結以下內容，並給予刻薄的嘲諷。',
  __COMMAND_ACT_SUM_LABEL: '總結',
  __COMMAND_ACT_SUM_TEXT: '總結',
  __COMMAND_ACT_SUM_PROMPT: '請總結以下內容，並給予細節。',
  __COMMAND_ANALYZE_LABEL: '分析',
  __COMMAND_ANALYZE_TEXT: '分析',
  __COMMAND_ANALYZE_PROMPT: '請分析以下內容，並給予細節。',
  __COMMAND_ANALYZE_LITERARILY_LABEL: '文學分析',
  __COMMAND_ANALYZE_LITERARILY_TEXT: '文學分析',
  __COMMAND_ANALYZE_LITERARILY_PROMPT: '請使用文學的角度分析以下內容，並給予細節。',
  __COMMAND_ANALYZE_MATHEMATICALLY_LABEL: '數學分析',
  __COMMAND_ANALYZE_MATHEMATICALLY_TEXT: '數學分析',
  __COMMAND_ANALYZE_MATHEMATICALLY_PROMPT: '請使用數學的角度分析以下內容，並給予細節。',
  __COMMAND_ANALYZE_NUMEROLOGICALLY_LABEL: '命理學分析',
  __COMMAND_ANALYZE_NUMEROLOGICALLY_TEXT: '命理學分析',
  __COMMAND_ANALYZE_NUMEROLOGICALLY_PROMPT: '請使用命理學的角度分析以下內容，並給予細節。',
  __COMMAND_ANALYZE_PHILOSOPHICALLY_LABEL: '哲學分析',
  __COMMAND_ANALYZE_PHILOSOPHICALLY_TEXT: '哲學分析',
  __COMMAND_ANALYZE_PHILOSOPHICALLY_PROMPT: '請使用哲學的角度分析以下內容，並給予細節。',
  __COMMAND_ANALYZE_PSYCHOLOGICALLY_LABEL: '心理學分析',
  __COMMAND_ANALYZE_PSYCHOLOGICALLY_TEXT: '心理學分析',
  __COMMAND_ANALYZE_PSYCHOLOGICALLY_PROMPT: '請使用心理學的角度分析以下內容，並給予細節。',
  __COMMAND_SYS_ACTIVATE_LABEL: '開啟自動回覆',
  __COMMAND_SYS_ACTIVATE_TEXT: '開啟自動回覆',
  __COMMAND_SYS_ACTIVATE_REPLY: '已開啟自動回覆',
  __COMMAND_SYS_COMMAND_LABEL: '指令',
  __COMMAND_SYS_COMMAND_TEXT: '指令',
  __COMMAND_SYS_CONTINUE_LABEL: '繼續',
  __COMMAND_SYS_CONTINUE_TEXT: '繼續',
  __COMMAND_SYS_DEACTIVATE_LABEL: '關閉自動回覆',
  __COMMAND_SYS_DEACTIVATE_TEXT: '關閉自動回覆',
  __COMMAND_SYS_DEACTIVATE_REPLY: '已關閉自動回覆',
  __COMMAND_SYS_DOC_LABEL: '查看文件',
  __COMMAND_SYS_DOC_TEXT: '文件',
  __COMMAND_SYS_DRAW_LABEL: '請畫',
  __COMMAND_SYS_DRAW_TEXT: '請畫',
  __COMMAND_SYS_DRAW_DEMO_LABEL: '請畫',
  __COMMAND_SYS_DRAW_DEMO_TEXT: '請畫貓咪',
  __COMMAND_SYS_DEPLOY_LABEL: '重新啟動',
  __COMMAND_SYS_DEPLOY_TEXT: '重新啟動',
  __COMMAND_SYS_DEPLOY_REPLY: '正在重新啟動',
  __COMMAND_SYS_REPORT_LABEL: '回報問題',
  __COMMAND_SYS_REPORT_TEXT: '回報問題',
  __COMMAND_SYS_REPORT_REPLY: '如有任何問題，請透過 memochou1993@gmail.com 聯繫開發團隊，謝謝。',
  __COMMAND_SYS_SUMMON_DEMO_LABEL: '呼叫',
  __COMMAND_SYS_SUMMON_DEMO_TEXT: `${config.BOT_NAME} 你好嗎？`,
  __COMMAND_SYS_TALK_LABEL: '請問',
  __COMMAND_SYS_TALK_TEXT: '請問',
  __COMMAND_SYS_TALK_DEMO_LABEL: '請問',
  __COMMAND_SYS_TALK_DEMO_TEXT: '請問你好嗎',
  __COMMAND_SYS_VERSION_LABEL: '檢查更新',
  __COMMAND_SYS_VERSION_TEXT: '版本',
  __COMMAND_SYS_VERSION_REPLY: (version, isLatest) => `目前版本為 ${version}${isLatest ? '，已更新到最新版本' : ''}。`,
  __COMMAND_TRANSLATE_TO_EN_LABEL: '翻成英文',
  __COMMAND_TRANSLATE_TO_EN_TEXT: '翻成英文',
  __COMMAND_TRANSLATE_TO_EN_PROMPT: '請將以下內容翻譯成英文。',
  __COMPLETION_INIT_MESSAGE: '哈囉！',
  __COMPLETION_QUOTATION_MARK_OPENING: '「',
  __COMPLETION_QUOTATION_MARK_CLOSING: '」',
  __ERROR_MAX_GROUPS_REACHED: '群組數量已達上限',
  __ERROR_MAX_USERS_REACHED: '用戶數量已達上限',
  __ERROR_MISSING_ENV: (v) => `缺少環境變數：${v}`,
  __MESSAGE_NEW_VERSION_AVAILABLE: (version) => `最新版本為 ${version}，請從 GitHub 更新。`,
  __USER_DISPLAY_NAME_SOMEONE: '某人',
};

export default zh;
