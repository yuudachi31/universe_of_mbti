import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
        articleList:[
            {
                "articleTitle": "INFJ Personality Type Profile INFJ人格介紹",
                "articleDescription": "INFJ通常是“老靈魂”，他們看上去總是比實際年齡要更沉穩睿智。由於在人生的很早期，INFJINFJ通常是“老靈魂”，他們看上去總是比實際年齡要更沉穩睿智。由於在人生的很早期，INFJ",
                "date": "OCT 24",
                "tags": ["INFJ"],
                "articleId":"8594aj",
                "author":["Dr. A.J. Drenth","翻譯：Rina's"],
                "date2":"2022.10.24",
                "publish":true,
                "articleContent":["<div class='article-detail-content'>INFJ通常是「老靈魂」，他們看上去總是比實際年齡要更沈穩睿智。由於在人生的很早期，INFJ就已經很好地培養了他們［內向直覺(Ni)］的功能，因此他們通常傾向於信任自己的判斷和見解。即使是在孩童與青少年時期，INFJ們就常常能為他們的朋友、兄妹、甚至成年家庭成員提供建議和咨詢意見。他們覺得最有幸福感和滿足感的時候就是在用自己的智慧去幫助別人和啓發別人的時候。</div>",
              "<div class='article-title'>・INFJ的人格發展與功能類型</div>","<div class='article-detail-content'>每種人格型都傾向於使用榮格所描述的八種功能中的四種。這四個功能組成了一種「人格」的「功能類型」。這四個功能的相對強度以下列方式排序：主導功能、輔助功能、第三功能和第四功能。INFJ的主導功能是Ni功能，其次是Fe功能，Ti功能和Se功能。以下是具體描述：</div>",
              "<div class='article-title'>・INFJ的功能類型</div>",
              "<div class='article-sublist'>主導功能：內向直覺Ni</div>","<div class='article-sublist'>輔助功能：外向情感Fe</div>","<div class='article-sublist'>第三功能：內向思考Ti</div>","<div class='article-sublist'>第四功能：外向感覺Se</div>",
              "<div class='article-detail-content'>雖然我們很快就會開始深入地討論每一個功能，但是現在，我們先轉向INFJ的另一個特性——他們的人格發展。正如所有類型一樣，INFJ的人格發展包括三個階段。這些階段的發展過程大致相當於「功能類型」的排序過程，Ni功能是第一個發展的功能，以此類推是Fe功能，Ti功能和Se功能。但正如我們所看到的那樣，第四功能Se是一種特殊的情況，期望它能在較早的階段就喚起INFJ的注意力，顯然是不可能的。</div>"
              ]
              },
              {
                "articleTitle": "INFJ Personality Type Profile INFJ人格介紹",
                "articleDescription": "INFJ通常是“老靈魂”，他們看上去總是比實際年齡要更沉穩睿智。由於在人生的很早期，INFJINFJ通常是“老靈魂”，他們看上去總是比實際年齡要更沉穩睿智。由於在人生的很早期，INFJ",
                "date": "OCT 24",
                "tags": ["INFJ"],
                "articleId":"8594aj",
                "author":["Dr. A.J. Drenth","翻譯：Rina's"],
                "date2":"2022.10.24",
                "publish":true,
                "articleContent":["<div class='article-detail-content'>INFJ通常是「老靈魂」，他們看上去總是比實際年齡要更沈穩睿智。由於在人生的很早期，INFJ就已經很好地培養了他們［內向直覺(Ni)］的功能，因此他們通常傾向於信任自己的判斷和見解。即使是在孩童與青少年時期，INFJ們就常常能為他們的朋友、兄妹、甚至成年家庭成員提供建議和咨詢意見。他們覺得最有幸福感和滿足感的時候就是在用自己的智慧去幫助別人和啓發別人的時候。</div>",
              "<div class='article-title'>・INFJ的人格發展與功能類型</div>","<div class='article-detail-content'>每種人格型都傾向於使用榮格所描述的八種功能中的四種。這四個功能組成了一種「人格」的「功能類型」。這四個功能的相對強度以下列方式排序：主導功能、輔助功能、第三功能和第四功能。INFJ的主導功能是Ni功能，其次是Fe功能，Ti功能和Se功能。以下是具體描述：</div>",
              "<div class='article-title'>・INFJ的功能類型</div>",
              "<div class='article-sublist'>主導功能：內向直覺Ni</div>","<div class='article-sublist'>輔助功能：外向情感Fe</div>","<div class='article-sublist'>第三功能：內向思考Ti</div>","<div class='article-sublist'>第四功能：外向感覺Se</div>",
              "<div class='article-detail-content'>雖然我們很快就會開始深入地討論每一個功能，但是現在，我們先轉向INFJ的另一個特性——他們的人格發展。正如所有類型一樣，INFJ的人格發展包括三個階段。這些階段的發展過程大致相當於「功能類型」的排序過程，Ni功能是第一個發展的功能，以此類推是Fe功能，Ti功能和Se功能。但正如我們所看到的那樣，第四功能Se是一種特殊的情況，期望它能在較早的階段就喚起INFJ的注意力，顯然是不可能的。</div>"
              ]
              }
           
        ]
    
    
}

const adminSlice =createSlice({
name:'admin',
initialState,
reducers:{
    articleEditing:(state,action)=>{
        const list = state.articleList.filter(item=>item.id != action.payload.id)
      const article = state.articleList.find(art=>art.id==action.payload.id)
       article.normalContent=action.payload.normalContent
       state.articleList=[
        article,
    ...list
       ]
    }
}
});
//export state to global，可用useSelector呼叫store
export const Selectadmin = (state) => state.admin.articleList;

//export actions to global，可用useDispatch呼叫action
export const {articleEditing}=adminSlice.actions;

//export reducer to global
export default adminSlice.reducer