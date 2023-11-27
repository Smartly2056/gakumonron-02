# import cv2
# import pafy

# # YouTubeライブストリームのURLを指定
# url = "https://www.youtube.com/watch?v=vyk_Ud2z1wQ"  # vyk_Ud2z1wQを実際のYouTubeビデオIDに置き換えてください

# # YouTubeビデオ情報を取得
# video = pafy.new(url)
# best = video.getbest(preftype="mp4")

# # ウェブカメラを初期化
# cap = cv2.VideoCapture(best.url)

# while True:
#     # ライブカメラからフレームを読み込む
#     ret, frame = cap.read()

#     # フレームの読み込みに成功したら表示
#     if ret:
#         cv2.imshow('YouTube Live Stream', frame)

#     # 'q'キーを押してアプリを終了
#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break

# # 後片付け
# cap.release()
# cv2.destroyAllWindows()
