(function () {
    console.log("フォームバリデーションを無効化");
  
    // すべての入力要素を取得
    document.querySelectorAll("input, textarea, select").forEach((element) => {
      // バリデーションに関連するクラスを削除
      element.className = ""; // すべてのクラスを削除（必要に応じて特定のクラスだけ削除しても良い）
      
      // バリデーションに関する属性を削除
      element.removeAttribute("required");
      element.removeAttribute("pattern");
      element.removeAttribute("min");
      element.removeAttribute("max");
    });
  
    // すべてのフォームに `novalidate` を適用
    document.querySelectorAll("form").forEach((form) => {
      form.setAttribute("novalidate", "true");
  
      // すべてのイベントリスナーを削除
      form.onsubmit = null;
      form.oninput = null;
      form.onchange = null;
    });
  
    // 既存の JavaScript イベントリスナーを削除
    function removeEventListeners(element) {
      let newElement = element.cloneNode(true);
      element.parentNode.replaceChild(newElement, element);
    }
  
    document.querySelectorAll("input, textarea, select, form").forEach((element) => {
      removeEventListeners(element);
    });
  
    alert("高度なバリデーションを無効化しました！");
  })();
  