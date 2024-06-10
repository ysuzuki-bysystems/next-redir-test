# 多重 redirect の確認

1. https://next-redir-test.vercel.app/login へアクセス
2. **login** ボタンを押下
3. 期待値 ... `/` -> `/main` へリダイレクトされ画面のURL が `/main` となる。実際は `/` のまま
    - RSC でのリダイレクト
4. F5 押下で、 `/` -> `/main` のリダイレクトが正常に走り、 `/main` となる。
    - ブラウザの Navigation
