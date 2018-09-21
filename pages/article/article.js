const WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    caseID: '',
    title: '',
    content: '',
    classification: '',
    date: '',
    article: ''
  },
  onLoad: function(options) {
    this.setData({
      caseID: options.id
    })
    setTimeout(() => {
      this.setData({
        caseID: 'weixin_1',
        title: "小伙微信约“附近”美女被骗8千元 骗子在千里外",
        article: `<p>&nbsp;&nbsp;&nbsp;&nbsp;小伙晚上闲得无聊，通过微信查找附近的人，找了个“近在眼前”的美女，开好房，8000元没了，美女影子都没见着。其实，他是被人通过苹果手机位置共享的软件，制作出就在附近的假相所蒙骗。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;8日，犯罪嫌疑人翁某在巫山的家中被警方抓获，她的丈夫魏某在逃。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;终于，这起利用手机软件，通过微信虚拟“招嫖行骗”的诈骗案，被揭开了冰山一角。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;记者 万勤 通讯员 万信立</p> 
        <p>&nbsp;&nbsp;&nbsp;<strong>&nbsp;小伙被“附近美女”骗了8000元</strong></p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;21岁的张某在武汉经济技术开发区打工，2月8日晚，他因为无聊便通过微信查找附近的人，找到了一个名叫“越越”的微信好友，“越越”头像年轻妩媚，衣着大胆。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;张某在微信上跟“越越”打招呼，对方很快就回应，张某邀约对方出来玩，没想到“越越”开口就谈价钱：“400元，3小时”。张某跟“越越”在微信上约好：200元1小时。张某兴高采烈地在宾馆开了房，按照“越越”要求，将身份证号和房间号拍成图片后，用微信传给了“越越”。过了一会儿，“越越”表示来到了宾馆楼下，但她却谈起了条件，“我看到楼下有警车，我不放心，你得打300元保证金，以保证你不是卧底”。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;张某急不可耐地打了300元保证金，“越越”又以其他理由要张某打保证金。当张某提出质疑时，“越越”便用语音聊天功能跟他聊天，并表示“你发的红包或转账，我一个都不会领取，只作保证金用”。“越越”声音甜美温柔，“越越”还给张某发了位置共享，显示她距自己所在位置不到10米，而自己发的那些红包或转账，“越越”一个都没领取，期间“越越”还因手机没电，换个手机跟他聊，在这个手机里，“越越”又变成了“惠惠”。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;就这样，两人从晚上8点聊到次日凌晨1点期间，在“越越”的各种蛊惑下，张某先后发了13个红包或转账给“越越”做保证金，一直到将微信绑定的银行卡内金额都用光，其中在一次转账500元的过程中，因激动张某多打了一个“0”，500变成了5000，就这样他先后发红包或转账8000元。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;凌晨1时，张某连美女的影子都没见着，便被“越越”拉黑了，卡内8000元被取走，张某这才清醒过来，他向武汉经济技术开发区湖滨派出所报警。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>民警查找附近的人找到“蝶恋花”</strong></p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;这起案件到了湖滨派出所刑警刘小平手上，这是一起罕见的非接触性诈骗案，嫌疑人通过微信网络进行诈骗，微信号不可能是实名，破案有相当大的难度。经过调查，微信号是在重庆注册的，转款的账号是盗用他人身份证开户的。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;2月28日，刘小平带着同事驱车900多公里到重庆，在重庆警方的协助下，只查到“越越”和“惠惠”两个微信号，是在重庆巫山注册，他们又驱车赶到700多公里外的巫山，工作了几天，没有任何线索，刘小平只好驱车返回武汉。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;3月6日，执著的刘小平再次出发了，这次的目的地直接是重庆巫山。刘小平这次来之前也做了功课，他决定以其人之道还治其人之身。喜欢下残局棋的刘小平说：“科技手段不行就用笨办法——传统手段也可以试一试。”</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;他就利用微信里的查找附近的人，寻找嫌疑人，他在分析越越和惠惠的微信号时，发现了两个微信号都有一个共同的特点，都是以英文“SW”开头，不停地通过查找附近的人方式进行查找类似的微信号，并进行甄别、排除。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;他拿着手机，每天沿着巫山县城走十多公里，不停地通过附近的人进行查找，3月8日，他忽然找到了一个名叫“蝶恋花”的微信网友，“蝶恋花”微信名不仅也是以“SW”开头，而且头像跟越越和惠惠的头像是一模一样。</p> 
        <p>&nbsp;&nbsp;<strong>&nbsp;&nbsp;场景照片比对找到“巫山神女”</strong></p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;刘小平几经试探，加上了“蝶恋花”，但“蝶恋花”警惕性很高，不肯透露任何信息。刘小平便称自己在重庆巫山，想约“蝶恋花”见一面，表示愿意付费，他先将自己所在的巫山县城的照片发出来，以打消“蝶恋花”的疑虑。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;那边“蝶恋花”为了证实自己，也发了一张图片，表示是自己在房中拍摄的。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;刘小平如获至宝，赶紧请巫山县公安局的民警辨认照片：该照片拍于巫山县桐子坪。桐子坪有多座图片类似的楼房，都是还建楼房，“蝶恋花”到底在哪栋楼里，在哪个房间？</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;刘小平仔细研究了照片，根据图片内楼房所在位置，他将地点大致定位在巫山县迎宾路，应该是在5楼。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;找到了图片相对应的大楼，刘小平直奔对面的一个单元的5楼。5楼有两户人家，敲了第一户门，是一对老夫妻；敲第二户门时，一个穿厚睡衣的年轻女子开门，还挺着一个大肚子，屋里只有她一人，那女子听刘小平表明身份后，突然慌张起来，刘小平让她拿出手机检查，她迟疑地向枕头边看了看，刘小平顺手一翻，两部苹果手机赫然在列。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;检查其手机里的微信聊天记录，一部手机里竟然还保持着与武汉受害人张某的聊天记录，此外，还发现了以各种美女头像注册了30多个以“SW”开头的微信。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;就是她。刘小平通过审问，她的真名其实就叫翁某，1989年出生，她的丈夫名叫魏某，所谓的“越越”“惠惠”和“蝶恋花”，其实是她和丈夫的共用网名，聊天主要是丈夫魏某模仿女性跟人聊天，如果受骗人提出视频，翁某就发一段提前录制好的小视频迷惑对方，翁某有时也使用语音聊天系统聊天骗人。</p> 
        <p>&nbsp;&nbsp;&nbsp;<strong>&nbsp;“附近的人”竟是“技术伪造”</strong></p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;昨日，仍在重庆巫山追赃的刘小平正在竭力说服翁某劝她丈夫魏某投案自首，他告诉武汉晚报记者：27岁的翁某毕业于某邮电大学，她的丈夫魏某则只有初中文化程度，两人原来都有家庭，在诈骗时认识，为了共同的“诈骗事业”后各自离婚，然后结合在一起，翁某利用所学专业，给丈夫行骗作技术支撑，她使用了一个XX游的软件，在行骗过程中，他们先获取受骗人开房宾馆的地址后，然后在网上找到这个宾馆，直接把自己位置虚拟成在宾馆附近，造成自己就在受骗者附近的假相。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;刘小平介绍说，找到翁某时，她已经身怀六甲，离预产期只有5天；对魏某已经上网追逃，翁某于昨日退回了行骗得手的8000元现金。</p> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;刘小平还提示说，这类案子的作案对象，均是在网上寻找刺激的男子，这些案子一般都会在骗子第一次骗取300元、500元的少量保证金后受骗人都会察觉，但由于金额少，再加上他们不敢报案羞于报案的心理，因此几乎很少有人报案。而像张某这样被骗了8000元还不死心的，实在少见。嫌疑人手机里，保存有全国各地50多个人的聊天或转款记录，表明这起案子背后还有不少的受骗者。</p>`,
        classification: "微信诈骗",
        date: "2017-03-15"
      })
      WxParse.wxParse('content', 'html', this.data.article, this);
    }, 0)
  }
})