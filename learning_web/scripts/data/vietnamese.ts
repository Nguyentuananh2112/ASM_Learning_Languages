export const course = {
    id: 4, 
    title: "Vietnamese",
    imageSrc: "/vn-flag.svg", 
};

// ============================================================================
// == UNITS (ID Range: 40001-40005)
// ============================================================================
export const units = [
    { id: 40001, courseId: 4, title: "Unit 1: Nền Tảng Cơ Bản", description: "Học bảng chữ cái, chào hỏi và từ vựng cơ bản", order: 1 },
    { id: 40002, courseId: 4, title: "Unit 2: Giao Tiếp Hàng Ngày", description: "Giao tiếp trong các tình huống đời thường", order: 2 },
    { id: 40003, courseId: 4, title: "Unit 3: Mở Rộng Giao Tiếp", description: "Học về thời gian, thời tiết và sở thích", order: 3 },
    { id: 40004, courseId: 4, title: "Unit 4: Cấu Trúc Câu", description: "Nắm vững ngữ pháp cốt lõi", order: 4 },
    { id: 40005, courseId: 4, title: "Unit 5: Chủ Đề Nâng Cao", description: "Từ vựng và hội thoại trung cấp", order: 5 },
] as const;

// ============================================================================
// == LESSONS (ID Range: 41001-41025)
// ============================================================================
export const lessons = [
    // Unit 1 (ID: 40001)
    { id: 41001, unitId: 40001, order: 1, title: "Bảng Chữ Cái (Nguyên Âm & Phụ Âm)" },
    { id: 41002, unitId: 40001, order: 2, title: "Thanh Điệu" },
    { id: 41003, unitId: 40001, order: 3, title: "Chào Hỏi và Tự Giới Thiệu" },
    { id: 41004, unitId: 40001, order: 4, title: "Đại Từ Nhân Xưng Cơ Bản" },
    { id: 41005, unitId: 40001, order: 5, title: "Số Đếm 1-10" },
    // Unit 2 (ID: 40002)
    { id: 41006, unitId: 40002, order: 1, title: "Hỏi và Trả Lời Về Tuổi" },
    { id: 41007, unitId: 40002, order: 2, title: "Gia Đình và Bạn Bè" },
    { id: 41008, unitId: 40002, order: 3, title: "Đồ Vật Hàng Ngày" },
    { id: 41009, unitId: 40002, order: 4, title: "Hỏi Giá và Mua Sắm" },
    { id: 41010, unitId: 40002, order: 5, title: "Chỉ Đường và Hỏi Đường" },
    // Unit 3 (ID: 40003)
    { id: 41011, unitId: 40003, order: 1, title: "Nói Về Thời Gian (Giờ, Ngày)" },
    { id: 41012, unitId: 40003, order: 2, title: "Nói Về Thời Tiết" },
    { id: 41013, unitId: 40003, order: 3, title: "Sở Thích Cá Nhân" },
    { id: 41014, unitId: 40003, order: 4, title: "Gọi Món Tại Nhà Hàng" },
    { id: 41015, unitId: 40003, order: 5, title: "Tính Từ Mô Tả (Màu Sắc, Kích Thước)" },
    // Unit 4 (ID: 40004)
    { id: 41016, unitId: 40004, order: 1, title: "Câu Hỏi và Câu Trả Lời (Có/Không)" },
    { id: 41017, unitId: 40004, order: 2, title: "Thì Hiện Tại Đơn" },
    { id: 41018, unitId: 40004, order: 3, title: "Thì Quá Khứ Đơn" },
    { id: 41019, unitId: 40004, order: 4, title: "Thì Tương Lai Đơn" },
    { id: 41020, unitId: 40004, order: 5, title: "Từ Nối Cơ Bản (và, nhưng, hoặc)" },
    // Unit 5 (ID: 40005)
    { id: 41021, unitId: 40005, order: 1, title: "Biểu Đạt Cảm Xúc" },
    { id: 41022, unitId: 40005, order: 2, title: "Giao Tiếp Tại Nơi Làm Việc" },
    { id: 41023, unitId: 40005, order: 3, title: "Thuê Nhà và Sinh Hoạt" },
    { id: 41024, unitId: 40005, order: 4, title: "Lên Kế Hoạch Du Lịch" },
    { id: 41025, unitId: 40005, order: 5, title: "Văn Hóa và Phong Tục Việt Nam" },
] as const;

// ============================================================================
// == CHALLENGES (ID Range: 42001-42075)
// ============================================================================
export const challenges = [
    // Unit 1, Lesson 41001: Bảng Chữ Cái (Nguyên Âm & Phụ Âm)
    { id: 42001, lessonId: 41001, type: "ASSIST", order: 1, question: "Hãy đọc ký tự nguyên âm này: 'Ơ'?" }, 
    { id: 42002, lessonId: 41001, type: "ASSIST", order: 2, question: "Ký tự 'D' trong tiếng Việt đọc như thế nào?" }, 
    { id: 42003, lessonId: 41001, type: "ASSIST", order: 3, question: "Đánh vần từ 'SÔNG'?" }, 
    // Unit 1, Lesson 41002: Thanh Điệu
    { id: 42004, lessonId: 41002, type: "ASSIST", order: 1, question: "Thanh điệu nào tạo ra âm cao và ngắn?" }, 
    { id: 42005, lessonId: 41002, type: "ASSIST", order: 2, question: "Thanh điệu nào tạo ra âm thấp và kéo dài?" }, 
    { id: 42006, lessonId: 41002, type: "SELECT", order: 3, question: "Từ nào có thanh 'ngã'?" }, 
    // Unit 1, Lesson 41003: Chào Hỏi và Tự Giới Thiệu
    { id: 42007, lessonId: 41003, type: "ASSIST", order: 1, question: "Cách nói 'Chào buổi sáng' trong tiếng Việt?" }, 
    { id: 42008, lessonId: 41003, type: "ASSIST", order: 2, question: "Bạn dùng câu gì để hỏi tên người khác?" }, 
    { id: 42009, lessonId: 41003, type: "ASSIST", order: 3, question: "Cách nói 'Rất vui được gặp bạn' trong tiếng Việt?" }, 
    // Unit 1, Lesson 41004: Đại Từ Nhân Xưng Cơ Bản
    { id: 42010, lessonId: 41004, type: "SELECT", order: 1, question: "Đại từ nào phù hợp để gọi người lớn tuổi hơn mình (nam)?" }, 
    { id: 42011, lessonId: 41004, type: "SELECT", order: 2, question: "Đại từ nào phù hợp để gọi người nhỏ tuổi hơn mình (nữ)?" }, 
    { id: 42012, lessonId: 41004, type: "ASSIST", order: 3, question: "Bạn nói 'họ' (số nhiều) trong tiếng Việt?" }, 
    // Unit 1, Lesson 41005: Số Đếm 1-10
    { id: 42013, lessonId: 41005, type: "SELECT", order: 1, question: "Chọn số 'bảy':" }, 
    { id: 42014, lessonId: 41005, type: "SELECT", order: 2, question: "Số nào đứng trước số 'mười'?" }, 
    { id: 42015, lessonId: 41005, type: "ASSIST", order: 3, question: "Số 'chín' là gì?" }, 
    // Unit 2, Lesson 41006: Hỏi và Trả Lời Về Tuổi
    { id: 42016, lessonId: 41006, type: "ASSIST", order: 1, question: "Cách hỏi tuổi một người bạn đồng trang lứa?" }, 
    { id: 42017, lessonId: 41006, type: "ASSIST", order: 2, question: "Bạn nói 'Tôi năm nay 25 tuổi'." }, 
    { id: 42018, lessonId: 41006, type: "ASSIST", order: 3, question: "Bạn sẽ hỏi tuổi một người lớn tuổi hơn mình như thế nào cho lịch sự?" }, 
    // Unit 2, Lesson 41007: Gia Đình và Bạn Bè
    { id: 42019, lessonId: 41007, type: "ASSIST", order: 1, question: "Từ 'ông' là gì?" }, 
    { id: 42020, lessonId: 41007, type: "ASSIST", order: 2, question: "Từ 'bà' là gì?" },
    { id: 42021, lessonId: 41007, type: "ASSIST", order: 3, question: "Bạn gọi 'chị gái' như thế nào?" }, 
    // Unit 2, Lesson 41008: Đồ Vật Hàng Ngày
    { id: 42022, lessonId: 41008, type: "SELECT", order: 1, question: 'Chọn hình ảnh "xe máy".' }, 
    { id: 42023, lessonId: 41008, type: "SELECT", order: 2, question: 'Từ nào chỉ "cửa sổ"?' }, 
    { id: 42024, lessonId: 41008, type: "ASSIST", order: 3, question: "Từ 'bàn' là gì?" }, 
    // Unit 2, Lesson 41009: Hỏi Giá và Mua Sắm
    { id: 42025, lessonId: 41009, type: "ASSIST", order: 1, question: "Bạn hỏi 'Cái áo này giá bao nhiêu?' như thế nào?" }, 
    { id: 42026, lessonId: 41009, type: "ASSIST", order: 2, question: "Cách nói 'Tôi lấy cái này' khi mua hàng?" }, 
    { id: 42027, lessonId: 41009, type: "ASSIST", order: 3, question: "Từ 'rẻ quá' là gì?" }, 
    // Unit 2, Lesson 41010: Chỉ Đường và Hỏi Đường
    { id: 42028, lessonId: 41010, type: "ASSIST", order: 1, question: "Bạn hỏi 'Nhà vệ sinh ở đâu?' như thế nào?" }, 
    { id: 42029, lessonId: 41010, type: "ASSIST", order: 2, question: "Bạn nói 'Rẽ trái' như thế nào?" }, 
    { id: 42030, lessonId: 41010, type: "ASSIST", order: 3, question: "Từ 'phía trước' là gì?" }, 
    // Unit 3, Lesson 41011: Nói Về Thời Gian (Giờ, Ngày)
    { id: 42031, lessonId: 41011, type: "ASSIST", order: 1, question: 'Cách hỏi "Hôm nay là thứ mấy?"' }, 
    { id: 42032, lessonId: 41011, type: "ASSIST", order: 2, question: 'Bạn nói "Bảy giờ tối" như thế nào?' }, 
    { id: 42033, lessonId: 41011, type: "ASSIST", order: 3, question: "Từ 'tuần sau' là gì?" }, 
    // Unit 3, Lesson 41012: Nói Về Thời Tiết
    { id: 42034, lessonId: 41012, type: "ASSIST", order: 1, question: 'Cách nói "Trời có gió" trong tiếng Việt?' }, 
    { id: 42035, lessonId: 41012, type: "ASSIST", order: 2, question: 'Cách nói "Trời nóng" trong tiếng Việt?' }, 
    { id: 42036, lessonId: 41012, type: "SELECT", order: 3, question: 'Chọn hình ảnh "nắng".' }, 
    // Unit 3, Lesson 41013: Sở Thích Cá Nhân
    { id: 42037, lessonId: 41013, type: "ASSIST", order: 1, question: "Sở thích của tôi là 'chơi thể thao'. Bạn nói thế nào?" }, 
    { id: 42038, lessonId: 41013, type: "ASSIST", order: 2, question: "Bạn hỏi 'Bạn thích làm gì vào thời gian rảnh?'" }, 
    { id: 42039, lessonId: 41013, type: "ASSIST", order: 3, question: "Sở thích 'nấu ăn' là gì?" }, 
    // Unit 3, Lesson 41014: Gọi Món Tại Nhà Hàng
    { id: 42040, lessonId: 41014, type: "ASSIST", order: 1, question: "Bạn muốn gọi 'một ly nước cam'. Nói thế nào?" }, 
    { id: 42041, lessonId: 41014, type: "ASSIST", order: 2, question: "Từ nào chỉ danh sách các món ăn trong nhà hàng?" }, 
    { id: 42042, lessonId: 41014, type: "ASSIST", order: 3, question: "Bạn nói 'Tính tiền!' như thế nào?" }, 
    // Unit 3, Lesson 41015: Tính Từ Mô Tả (Màu Sắc, Kích Thước)
    { id: 42043, lessonId: 41015, type: "ASSIST", order: 1, question: "Từ 'đẹp' là gì?" }, 
    { id: 42044, lessonId: 41015, type: "ASSIST", order: 2, question: "Từ 'xấu' là gì?" }, 
    { id: 42045, lessonId: 41015, type: "ASSIST", order: 3, question: "Từ 'đỏ' (màu sắc) là gì?" }, 
    // Unit 4, Lesson 41016: Câu Hỏi và Câu Trả Lời (Có/Không)
    { id: 42046, lessonId: 41016, type: "ASSIST", order: 1, question: "Bạn hỏi 'Bạn có thích cà phê không?'" }, 
    { id: 42047, lessonId: 41016, type: "ASSIST", order: 2, question: "Trả lời 'Không, tôi không thích'." }, 
    { id: 42048, lessonId: 41016, type: "ASSIST", order: 3, question: "Trả lời 'Có, tôi có'." }, 
    // Unit 4, Lesson 41017: Thì Hiện Tại Đơn
    { id: 42049, lessonId: 41017, type: "ASSIST", order: 1, question: "Câu 'Chúng tôi học tiếng Việt' trong thì hiện tại đơn?" }, 
    { id: 42050, lessonId: 41017, type: "ASSIST", order: 2, question: "Câu 'Mỗi sáng cô ấy uống trà' trong thì hiện tại đơn?" }, 
    { id: 42051, lessonId: 41017, type: "ASSIST", order: 3, question: "Câu 'Họ sống ở Hà Nội' trong thì hiện tại đơn?" }, 
    // Unit 4, Lesson 41018: Thì Quá Khứ Đơn
    { id: 42052, lessonId: 41018, type: "ASSIST", order: 1, question: "Bạn nói 'Hôm qua tôi đã xem phim'." }, 
    { id: 42053, lessonId: 41018, type: "ASSIST", order: 2, question: "Bạn nói 'Tuần trước anh ấy đã đi du lịch'." }, 
    { id: 42054, lessonId: 41018, type: "ASSIST", order: 3, question: "Bạn nói 'Cô ấy đã mua một cuốn sách mới'." }, 
    // Unit 4, Lesson 41019: Thì Tương Lai Đơn
    { id: 42055, lessonId: 41019, type: "ASSIST", order: 1, question: "Bạn nói 'Chúng tôi sẽ ăn tối vào lúc 7 giờ'." }, 
    { id: 42056, lessonId: 41019, type: "ASSIST", order: 2, question: "Bạn nói 'Năm sau tôi sẽ đi Việt Nam'." }, 
    { id: 42057, lessonId: 41019, type: "ASSIST", order: 3, question: "Bạn nói 'Anh ấy sẽ gọi điện cho bạn sau'." }, 
    // Unit 4, Lesson 41020: Từ Nối Cơ Bản (và, nhưng, hoặc)
    { id: 42058, lessonId: 41020, type: "ASSIST", order: 1, question: 'Từ nào để kết nối hai danh từ hoặc hai ý tương đồng?' }, 
    { id: 42059, lessonId: 41020, type: "ASSIST", order: 2, question: 'Từ nào để diễn đạt sự đối lập hoặc ngoại lệ?' }, 
    { id: 42060, lessonId: 41020, type: "ASSIST", order: 3, question: "Từ nào để đưa ra sự lựa chọn?" }, 
    // Unit 5, Lesson 41021: Biểu Đạt Cảm Xúc
    { id: 42061, lessonId: 41021, type: "ASSIST", order: 1, question: "Bạn nói 'Tôi hạnh phúc' như thế nào?" }, 
    { id: 42062, lessonId: 41021, type: "ASSIST", order: 2, question: "Bạn nói 'Tôi mệt mỏi' như thế nào?" }, 
    { id: 42063, lessonId: 41021, type: "ASSIST", order: 3, question: "Từ 'ngạc nhiên' là gì?" }, 
    // Unit 5, Lesson 41022: Giao Tiếp Tại Nơi Làm Việc
    { id: 42064, lessonId: 41022, type: "ASSIST", order: 1, question: 'Ai là người quản lý trực tiếp của bạn trong công việc?' }, 
    { id: 42065, lessonId: 41022, type: "ASSIST", order: 2, question: 'Bạn gọi cuộc họp bằng tiếng Việt là gì?' }, 
    { id: 42066, lessonId: 41022, type: "ASSIST", order: 3, question: "Từ nào chỉ một nhiệm vụ hoặc công việc cụ thể được giao?" }, 
    // Unit 5, Lesson 41023: Thuê Nhà và Sinh Hoạt
    { id: 42067, lessonId: 41023, type: "ASSIST", order: 1, question: 'Bạn gọi tiền đặt cọc khi thuê nhà là gì?' }, 
    { id: 42068, lessonId: 41023, type: "ASSIST", order: 2, question: 'Bạn hỏi về chi phí sinh hoạt hàng tháng như thế nào?' }, 
    { id: 42069, lessonId: 41023, type: "ASSIST", order: 3, question: "Từ 'chủ nhà' là gì?" }, 
    // Unit 5, Lesson 41024: Lên Kế Hoạch Du Lịch
    { id: 42070, lessonId: 41024, type: "ASSIST", order: 1, question: 'Từ nào chỉ nơi bạn định đến trong chuyến đi?' }, 
    { id: 42071, lessonId: 41024, type: "ASSIST", order: 2, question: 'Bạn nói "đặt phòng khách sạn" như thế nào?' }, 
    { id: 42072, lessonId: 41024, type: "ASSIST", order: 3, question: "Từ 'visa' (thị thực) là gì?" }, 
    // Unit 5, Lesson 41025: Văn Hóa và Phong Tục Việt Nam
    { id: 42073, lessonId: 41025, type: "ASSIST", order: 1, question: 'Tên món ăn nổi tiếng của Việt Nam thường ăn kèm bánh phở?' }, 
    { id: 42074, lessonId: 41025, type: "ASSIST", order: 2, question: 'Lễ hội lớn nhất và quan trọng nhất ở Việt Nam là gì?' }, 
    { id: 42075, lessonId: 41025, type: "ASSIST", order: 3, question: "Bạn nói 'văn hóa' là gì?" }, 
] as const;

// ============================================================================
// == CHALLENGE OPTIONS
// ============================================================================
export const challengeOptions = [
    // U1-L41001
    { challengeId: 42001, correct: false, text: "A", audioSrc: "/assets/audio/vietnamese/unit_1/vi_a.mp3" },
    { challengeId: 42001, correct: true, text: "Ơ", audioSrc: "/assets/audio/vietnamese/unit_1/vi_uh.mp3" }, // Moved correct answer
    { challengeId: 42001, correct: false, text: "Ă", audioSrc: "/assets/audio/vietnamese/unit_1/vi_aw.mp3" },

    { challengeId: 42002, correct: false, text: "Gi", audioSrc: "/assets/audio/vietnamese/unit_1/vi_gi.mp3" },
    { challengeId: 42002, correct: true, text: "Dờ", audioSrc: "/assets/audio/vietnamese/unit_1/vi_do.mp3" }, // Moved correct answer
    { challengeId: 42002, correct: false, text: "Đê", audioSrc: "/assets/audio/vietnamese/unit_1/vi_de.mp3" },

    { challengeId: 42003, correct: false, text: "S-O-NG", audioSrc: "/assets/audio/vietnamese/unit_1/vi_so_ng.mp3" },
    { challengeId: 42003, correct: false, text: "S-Ô-NG", audioSrc: "/assets/audio/vietnamese/unit_1/vi_soo_ng.mp3" },
    { challengeId: 42003, correct: true, text: "S-ÔNG", audioSrc: "/assets/audio/vietnamese/unit_1/vi_soong.mp3" }, // Moved correct answer

    // U1-L41002
    { challengeId: 42004, correct: false, text: "Huyền", audioSrc: "/assets/audio/vietnamese/unit_1/vi_huyen.mp3" },
    { challengeId: 42004, correct: true, text: "Sắc", audioSrc: "/assets/audio/vietnamese/unit_1/vi_sac.mp3" }, // Moved correct answer
    { challengeId: 42004, correct: false, text: "Nặng", audioSrc: "/assets/audio/vietnamese/unit_1/vi_nang.mp3" },

    { challengeId: 42005, correct: true, text: "Huyền", audioSrc: "/assets/audio/vietnamese/unit_1/vi_huyen.mp3" },
    { challengeId: 42005, correct: false, text: "Hỏi", audioSrc: "/assets/audio/vietnamese/unit_1/vi_hoi.mp3" },
    { challengeId: 42005, correct: false, text: "Ngã", audioSrc: "/assets/audio/vietnamese/unit_1/vi_nga.mp3" },

    { challengeId: 42006, correct: false, text: "Dạy", audioSrc: "/assets/audio/vietnamese/unit_1/vi_day.mp3" },
    { challengeId: 42006, correct: false, text: "Đãi", audioSrc: "/assets/audio/vietnamese/unit_1/vi_dai.mp3" },
    { challengeId: 42006, correct: true, text: "Lẽ", audioSrc: "/assets/audio/vietnamese/unit_1/vi_le.mp3" }, // Moved correct answer

    // U1-L41003
    { challengeId: 42007, correct: true, text: "Chào buổi sáng", audioSrc: "/assets/audio/vietnamese/unit_1/vi_chao_buoi_sang.mp3" }, // Moved correct answer
    { challengeId: 42007, correct: false, text: "Chào buổi tối", audioSrc: "/assets/audio/vietnamese/unit_1/vi_chao_buoi_toi.mp3" },
    { challengeId: 42007, correct: false, text: "Chào buổi chiều", audioSrc: "/assets/audio/vietnamese/unit_1/vi_chao_buoi_chieu.mp3" },

    { challengeId: 42008, correct: false, text: "Bạn khỏe không?", audioSrc: "/assets/audio/vietnamese/unit_1/vi_ban_khoe_khong.mp3" },
    { challengeId: 42008, correct: true, text: "Bạn tên gì?", audioSrc: "/assets/audio/vietnamese/unit_1/vi_ban_ten_gi.mp3" }, // Moved correct answer
    { challengeId: 42008, correct: false, text: "Bạn ở đâu?", audioSrc: "/assets/audio/vietnamese/unit_1/vi_ban_o_dau.mp3" },

    { challengeId: 42009, correct: false, text: "Hẹn gặp lại", audioSrc: "/assets/audio/vietnamese/unit_1/vi_hen_gap_lai.mp3" },
    { challengeId: 42009, correct: false, text: "Tạm biệt", audioSrc: "/assets/audio/vietnamese/unit_1/vi_tam_biet.mp3" },
    { challengeId: 42009, correct: true, text: "Rất vui được gặp bạn", audioSrc: "/assets/audio/vietnamese/unit_1/vi_rat_vui_duoc_gap_ban.mp3" }, // Moved correct answer

    // U1-L41004
    { challengeId: 42010, correct: false, text: "bạn", audioSrc: "/assets/audio/vietnamese/unit_1/vi_ban.mp3" },
    { challengeId: 42010, correct: true, text: "anh", audioSrc: "/assets/audio/vietnamese/unit_1/vi_anh.mp3" }, // Moved correct answer
    { challengeId: 42010, correct: false, text: "em", audioSrc: "/assets/audio/vietnamese/unit_1/vi_em.mp3" },

    { challengeId: 42011, correct: false, text: "chị", audioSrc: "/assets/audio/vietnamese/unit_1/vi_chi.mp3" },
    { challengeId: 42011, correct: true, text: "em", audioSrc: "/assets/audio/vietnamese/unit_1/vi_em.mp3" }, // Moved correct answer
    { challengeId: 42011, correct: false, text: "cô", audioSrc: "/assets/audio/vietnamese/unit_1/vi_co.mp3" },

    { challengeId: 42012, correct: false, text: "chúng ta", audioSrc: "/assets/audio/vietnamese/unit_1/vi_chung_ta.mp3" },
    { challengeId: 42012, correct: true, text: "họ", audioSrc: "/assets/audio/vietnamese/unit_1/vi_ho.mp3" }, // Moved correct answer
    { challengeId: 42012, correct: false, text: "chúng tôi", audioSrc: "/assets/audio/vietnamese/unit_1/vi_chung_toi.mp3" },

    // U1-L41005
    { challengeId: 42013, text: "bảy", imageSrc: "/assets/images/vietnamese/unit_1/vi_bay.svg", correct: true, audioSrc: "/assets/audio/vietnamese/unit_1/vi_bay.mp3" }, // Moved correct answer
    { challengeId: 42013, text: "sáu", imageSrc: "/assets/images/vietnamese/unit_1/vi_sau.svg", correct: false, audioSrc: "/assets/audio/vietnamese/unit_1/vi_sau.mp3" },
    { challengeId: 42013, text: "tám", imageSrc: "/assets/images/vietnamese/unit_1/vi_tam.svg", correct: false, audioSrc: "/assets/audio/vietnamese/unit_1/vi_tam.mp3" },

    { challengeId: 42014, text: "chín", imageSrc: "/assets/images/vietnamese/unit_1/vi_chin.svg", correct: true, audioSrc: "/assets/audio/vietnamese/unit_1/vi_chin.mp3" }, // Moved correct answer
    { challengeId: 42014, text: "bảy", imageSrc: "/assets/images/vietnamese/unit_1/vi_bay.svg", correct: false, audioSrc: "/assets/audio/vietnamese/unit_1/vi_bay.mp3" },
    { challengeId: 42014, text: "sáu", imageSrc: "/assets/images/vietnamese/unit_1/vi_sau.svg", correct: false, audioSrc: "/assets/audio/vietnamese/unit_1/vi_sau.mp3" },

    { challengeId: 42015, correct: false, text: "tám", audioSrc: "/assets/audio/vietnamese/unit_1/vi_tam.mp3" },
    { challengeId: 42015, correct: true, text: "chín", audioSrc: "/assets/audio/vietnamese/unit_1/vi_chin.mp3" }, // Moved correct answer
    { challengeId: 42015, correct: false, text: "mười", audioSrc: "/assets/audio/vietnamese/unit_1/vi_muoi.mp3" },

    // U2-L41006
    { challengeId: 42016, correct: true, text: "Bạn bao nhiêu tuổi?", audioSrc: "/assets/audio/vietnamese/unit_2/vi_ban_bao_nhieu_tuoi.mp3" },
    { challengeId: 42016, correct: false, text: "Anh/Chị bao nhiêu tuổi?", audioSrc: "/assets/audio/vietnamese/unit_2/vi_anh_chi_bao_nhieu_tuoi.mp3" },
    { challengeId: 42016, correct: false, text: "Em bao nhiêu tuổi?", audioSrc: "/assets/audio/vietnamese/unit_2/vi_em_bao_nhieu_tuoi.mp3" },

    { challengeId: 42017, correct: false, text: "Tôi là 25 tuổi", audioSrc: "/assets/audio/vietnamese/unit_2/vi_toi_la_25_tuoi.mp3" },
    { challengeId: 42017, correct: true, text: "Tôi năm nay 25 tuổi", audioSrc: "/assets/audio/vietnamese/unit_2/vi_toi_nam_nay_25_tuoi.mp3" },
    { challengeId: 42017, correct: false, text: "Tôi có 25 tuổi", audioSrc: "/assets/audio/vietnamese/unit_2/vi_toi_co_25_tuoi.mp3" },

    { challengeId: 42018, correct: false, text: "Bạn bao nhiêu tuổi?", audioSrc: "/assets/audio/vietnamese/unit_2/vi_ban_bao_nhieu_tuoi.mp3" },
    { challengeId: 42018, correct: true, text: "Anh/Chị/Ông/Bà bao nhiêu tuổi?", audioSrc: "/assets/audio/vietnamese/unit_2/vi_anh_chi_ong_ba_bao_nhieu_tuoi.mp3" }, // More general
    { challengeId: 42018, correct: false, text: "Chào bạn, bạn khỏe không?", audioSrc: "/assets/audio/vietnamese/unit_2/vi_chao_ban_ban_khoe_khong.mp3" },

    // U2-L41007
    { challengeId: 42019, correct: false, text: "bố", audioSrc: "/assets/audio/vietnamese/unit_2/vi_bo.mp3" },
    { challengeId: 42019, correct: true, text: "ông", audioSrc: "/assets/audio/vietnamese/unit_2/vi_ong.mp3" }, // Moved correct answer
    { challengeId: 42019, correct: false, text: "chú", audioSrc: "/assets/audio/vietnamese/unit_2/vi_chu.mp3" },

    { challengeId: 42020, correct: true, text: "bà", audioSrc: "/assets/audio/vietnamese/unit_2/vi_ba.mp3" },
    { challengeId: 42020, correct: false, text: "cô", audioSrc: "/assets/audio/vietnamese/unit_2/vi_co.mp3" },
    { challengeId: 42020, correct: false, text: "dì", audioSrc: "/assets/audio/vietnamese/unit_2/vi_di.mp3" },

    { challengeId: 42021, correct: false, text: "em gái", audioSrc: "/assets/audio/vietnamese/unit_2/vi_em_gai.mp3" },
    { challengeId: 42021, correct: true, text: "chị gái", audioSrc: "/assets/audio/vietnamese/unit_2/vi_chi_gai.mp3" }, // Moved correct answer
    { challengeId: 42021, correct: false, text: "anh trai", audioSrc: "/assets/audio/vietnamese/unit_2/vi_anh_trai.mp3" },

    // U2-L41008
    { challengeId: 42022, text: "xe máy", imageSrc: "/assets/images/vietnamese/unit_2/vi_xe_may.svg", correct: true, audioSrc: "/assets/audio/vietnamese/unit_2/vi_xe_may.mp3" }, // Moved correct answer
    { challengeId: 42022, text: "xe đạp", imageSrc: "/assets/images/vietnamese/unit_2/vi_xe_dap.svg", correct: false, audioSrc: "/assets/audio/vietnamese/unit_2/vi_xe_dap.mp3" },
    { challengeId: 42022, text: "ô tô", imageSrc: "/assets/images/vietnamese/unit_2/vi_o_to.svg", correct: false, audioSrc: "/assets/audio/vietnamese/unit_2/vi_o_to.mp3" },

    { challengeId: 42023, text: "cửa sổ", imageSrc: "/assets/images/vietnamese/unit_2/vi_cua_so.svg", correct: true, audioSrc: "/assets/audio/vietnamese/unit_2/vi_cua_so.mp3" }, // Moved correct answer
    { challengeId: 42023, text: "cửa ra vào", imageSrc: "/assets/images/vietnamese/unit_2/vi_cua_ra_vao.svg", correct: false, audioSrc: "/assets/audio/vietnamese/unit_2/vi_cua_ra_vao.mp3" },
    { challengeId: 42023, text: "tủ", imageSrc: "/assets/images/vietnamese/unit_2/vi_tu.svg", correct: false, audioSrc: "/assets/audio/vietnamese/unit_2/vi_tu.mp3" },

    { challengeId: 42024, correct: false, text: "ghế", audioSrc: "/assets/audio/vietnamese/unit_2/vi_ghe.mp3" },
    { challengeId: 42024, correct: false, text: "tủ", audioSrc: "/assets/audio/vietnamese/unit_2/vi_tu.mp3" },
    { challengeId: 42024, correct: true, text: "bàn", audioSrc: "/assets/audio/vietnamese/unit_2/vi_ban.mp3" }, // Moved correct answer

    // U2-L41009
    { challengeId: 42025, correct: false, text: "Cái này đẹp không?", audioSrc: "/assets/audio/vietnamese/unit_2/vi_cai_nay_dep_khong.mp3" },
    { challengeId: 42025, correct: false, text: "Tôi muốn xem cái này", audioSrc: "/assets/audio/vietnamese/unit_2/vi_toi_muon_xem_cai_nay.mp3" },
    { challengeId: 42025, correct: true, text: "Cái áo này bao nhiêu tiền?", audioSrc: "/assets/audio/vietnamese/unit_2/vi_cai_ao_nay_bao_nhieu_tien.mp3" }, // Specific question, moved correct answer

    { challengeId: 42026, correct: true, text: "Tôi lấy cái này", audioSrc: "/assets/audio/vietnamese/unit_2/vi_toi_lay_cai_nay.mp3" },
    { challengeId: 42026, correct: false, text: "Tôi không lấy", audioSrc: "/assets/audio/vietnamese/unit_2/vi_toi_khong_lay.mp3" },
    { challengeId: 42026, correct: false, text: "Tôi không thích", audioSrc: "/assets/audio/vietnamese/unit_2/vi_toi_khong_thich.mp3" },

    { challengeId: 42027, correct: false, text: "Đắt quá", audioSrc: "/assets/audio/vietnamese/unit_2/vi_dat_qua.mp3" },
    { challengeId: 42027, correct: false, text: "Vừa phải", audioSrc: "/assets/audio/vietnamese/unit_2/vi_vua_phai.mp3" },
    { challengeId: 42027, correct: true, text: "Rẻ quá", audioSrc: "/assets/audio/vietnamese/unit_2/vi_re_qua.mp3" }, // Moved correct answer

    // U2-L41010
    { challengeId: 42028, correct: false, text: "Đồn công an ở đâu?", audioSrc: "/assets/audio/vietnamese/unit_2/vi_don_cong_an_o_dau.mp3" },
    { challengeId: 42028, correct: true, text: "Nhà vệ sinh ở đâu?", audioSrc: "/assets/audio/vietnamese/unit_2/vi_nha_ve_sinh_o_dau.mp3" },
    { challengeId: 42028, correct: false, text: "Bưu điện ở đâu?", audioSrc: "/assets/audio/vietnamese/unit_2/vi_buu_dien_o_dau.mp3" },

    { challengeId: 42029, correct: false, text: "Đi thẳng", audioSrc: "/assets/audio/vietnamese/unit_2/vi_di_thang.mp3" },
    { challengeId: 42029, correct: true, text: "Rẽ trái", audioSrc: "/assets/audio/vietnamese/unit_2/vi_re_trai.mp3" },
    { challengeId: 42029, correct: false, text: "Rẽ phải", audioSrc: "/assets/audio/vietnamese/unit_2/vi_re_phai.mp3" },

    { challengeId: 42030, correct: true, text: "phía trước", audioSrc: "/assets/audio/vietnamese/unit_2/vi_phía_truoc.mp3" },
    { challengeId: 42030, correct: false, text: "phía sau", audioSrc: "/assets/audio/vietnamese/unit_2/vi_phía_sau.mp3" },
    { challengeId: 42030, correct: false, text: "bên cạnh", audioSrc: "/assets/audio/vietnamese/unit_2/vi_ben_canh.mp3" },

    // U3-L41011
    { challengeId: 42031, correct: true, text: "Hôm nay là thứ mấy?", audioSrc: "/assets/audio/vietnamese/unit_3/vi_hom_nay_thu_may.mp3" }, // Moved correct answer
    { challengeId: 42031, correct: false, text: "Mấy giờ rồi?", audioSrc: "/assets/audio/vietnamese/unit_3/vi_may_gio_roi.mp3" },
    { challengeId: 42031, correct: false, text: "Ngày mai là thứ mấy?", audioSrc: "/assets/audio/vietnamese/unit_3/vi_ngay_mai_thu_may.mp3" },

    { challengeId: 42032, correct: false, text: "Bảy giờ sáng", audioSrc: "/assets/audio/vietnamese/unit_3/vi_bay_gio_sang.mp3" },
    { challengeId: 42032, correct: true, text: "Bảy giờ tối", audioSrc: "/assets/audio/vietnamese/unit_3/vi_bay_gio_toi.mp3" }, // Moved correct answer
    { challengeId: 42032, correct: false, text: "Bảy giờ đêm", audioSrc: "/assets/audio/vietnamese/unit_3/vi_bay_gio_dem.mp3" },

    { challengeId: 42033, correct: false, text: "tuần này", audioSrc: "/assets/audio/vietnamese/unit_3/vi_tuan_nay.mp3" },
    { challengeId: 42033, correct: false, text: "tuần trước", audioSrc: "/assets/audio/vietnamese/unit_3/vi_tuan_truoc.mp3" },
    { challengeId: 42033, correct: true, text: "tuần sau", audioSrc: "/assets/audio/vietnamese/unit_3/vi_tuan_sau.mp3" },

    // U3-L41012
    { challengeId: 42034, correct: false, text: "Trời mưa", audioSrc: "/assets/audio/vietnamese/unit_3/vi_troi_mua.mp3" },
    { challengeId: 42034, correct: true, text: "Trời có gió", audioSrc: "/assets/audio/vietnamese/unit_3/vi_troi_co_gio.mp3" }, // Moved correct answer
    { challengeId: 42034, correct: false, text: "Trời có mây", audioSrc: "/assets/audio/vietnamese/unit_3/vi_troi_co_may.mp3" },

    { challengeId: 42035, correct: true, text: "Trời nóng", audioSrc: "/assets/audio/vietnamese/unit_3/vi_troi_nong.mp3" },
    { challengeId: 42035, correct: false, text: "Trời lạnh", audioSrc: "/assets/audio/vietnamese/unit_3/vi_troi_lanh.mp3" },
    { challengeId: 42035, correct: false, text: "Trời mát", audioSrc: "/assets/audio/vietnamese/unit_3/vi_troi_mat.mp3" },

    { challengeId: 42036, text: "nắng", imageSrc: "/assets/images/vietnamese/unit_3/vi_nang.svg", correct: true, audioSrc: "/assets/audio/vietnamese/unit_3/vi_nang.mp3" }, // Moved correct answer
    { challengeId: 42036, text: "mây", imageSrc: "/assets/images/vietnamese/unit_3/vi_may.svg", correct: false, audioSrc: "/assets/audio/vietnamese/unit_3/vi_may.mp3" },
    { challengeId: 42036, text: "mưa", imageSrc: "/assets/images/vietnamese/unit_3/vi_mua.svg", correct: false, audioSrc: "/assets/audio/vietnamese/unit_3/vi_mua.mp3" },

    // U3-L41013
    { challengeId: 42037, correct: false, text: "đọc sách", audioSrc: "/assets/audio/vietnamese/unit_3/vi_doc_sach.mp3" },
    { challengeId: 42037, correct: false, text: "xem phim", audioSrc: "/assets/audio/vietnamese/unit_3/vi_xem_phim.mp3" },
    { challengeId: 42037, correct: true, text: "chơi thể thao", audioSrc: "/assets/audio/vietnamese/unit_3/vi_choi_the_thao.mp3" }, // Moved correct answer

    { challengeId: 42038, correct: false, text: "Sở thích của bạn là gì?", audioSrc: "/assets/audio/vietnamese/unit_3/vi_so_thich_cua_ban_la_gi.mp3" },
    { challengeId: 42038, correct: true, text: "Bạn thích làm gì vào thời gian rảnh?", audioSrc: "/assets/audio/vietnamese/unit_3/vi_ban_thich_lam_gi_thoi_gian_ranh.mp3" }, // Moved correct answer
    { challengeId: 42038, correct: false, text: "Bạn có thích du lịch không?", audioSrc: "/assets/audio/vietnamese/unit_3/vi_ban_co_thich_du_lich_khong.mp3" },

    { challengeId: 42039, correct: true, text: "nấu ăn", audioSrc: "/assets/audio/vietnamese/unit_3/vi_nau_an.mp3" },
    { challengeId: 42039, correct: false, text: "chụp ảnh", audioSrc: "/assets/audio/vietnamese/unit_3/vi_chup_anh.mp3" },
    { challengeId: 42039, correct: false, text: "vẽ tranh", audioSrc: "/assets/audio/vietnamese/unit_3/vi_ve_tranh.mp3" },

    // U3-L41014
    { challengeId: 42040, correct: false, text: "Cho tôi một nước cam", audioSrc: "/assets/audio/vietnamese/unit_3/vi_cho_toi_mot_nuoc_cam.mp3" },
    { challengeId: 42040, correct: false, text: "Tôi muốn nước cam", audioSrc: "/assets/audio/vietnamese/unit_3/vi_toi_muon_nuoc_cam.mp3" },
    { challengeId: 42040, correct: true, text: "Cho tôi một ly nước cam", audioSrc: "/assets/audio/vietnamese/unit_3/vi_cho_toi_mot_ly_nuoc_cam.mp3" }, // Added 'ly', moved correct answer

    { challengeId: 42041, correct: false, text: "hóa đơn", audioSrc: "/assets/audio/vietnamese/unit_3/vi_hoa_don.mp3" },
    { challengeId: 42041, correct: true, text: "thực đơn", audioSrc: "/assets/audio/vietnamese/unit_3/vi_thuc_don.mp3" },
    { challengeId: 42041, correct: false, text: "phiếu gọi món", audioSrc: "/assets/audio/vietnamese/unit_3/vi_phieu_goi_mon.mp3" },

    { challengeId: 42042, correct: false, text: "Ngon", audioSrc: "/assets/audio/vietnamese/unit_3/vi_ngon.mp3" },
    { challengeId: 42042, correct: false, text: "Không ngon", audioSrc: "/assets/audio/vietnamese/unit_3/vi_khong_ngon.mp3" },
    { challengeId: 42042, correct: true, text: "Tính tiền!", audioSrc: "/assets/audio/vietnamese/unit_3/vi_tinh_tien.mp3" }, // Moved correct answer

    // U3-L41015
    { challengeId: 42043, correct: true, text: "đẹp", audioSrc: "/assets/audio/vietnamese/unit_3/vi_dep.mp3" },
    { challengeId: 42043, correct: false, text: "xinh", audioSrc: "/assets/audio/vietnamese/unit_3/vi_xinh.mp3" },
    { challengeId: 42043, correct: false, text: "tốt", audioSrc: "/assets/audio/vietnamese/unit_3/vi_tot.mp3" },

    { challengeId: 42044, correct: false, text: "tốt", audioSrc: "/assets/audio/vietnamese/unit_3/vi_tot.mp3" },
    { challengeId: 42044, correct: true, text: "xấu", audioSrc: "/assets/audio/vietnamese/unit_3/vi_xau.mp3" }, // Moved correct answer
    { challengeId: 42044, correct: false, text: "kém", audioSrc: "/assets/audio/vietnamese/unit_3/vi_kem.mp3" },

    { challengeId: 42045, correct: false, text: "trắng", audioSrc: "/assets/audio/vietnamese/unit_3/vi_trang.mp3" },
    { challengeId: 42045, correct: false, text: "đen", audioSrc: "/assets/audio/vietnamese/unit_3/vi_den.mp3" },
    { challengeId: 42045, correct: true, text: "đỏ", audioSrc: "/assets/audio/vietnamese/unit_3/vi_do.mp3" }, // Moved correct answer

    // U4-L41016
    { challengeId: 42046, correct: false, text: "Bạn đi đâu?", audioSrc: "/assets/audio/vietnamese/unit_4/vi_ban_di_dau.mp3" },
    { challengeId: 42046, correct: true, text: "Bạn có thích cà phê không?", audioSrc: "/assets/audio/vietnamese/unit_4/vi_ban_co_thich_ca_phe_khong.mp3" },
    { challengeId: 42046, correct: false, text: "Bạn ăn gì?", audioSrc: "/assets/audio/vietnamese/unit_4/vi_ban_an_gi.mp3" },

    { challengeId: 42047, correct: true, text: "Không, tôi không thích", audioSrc: "/assets/audio/vietnamese/unit_4/vi_khong_toi_khong_thich.mp3" }, // Moved correct answer
    { challengeId: 42047, correct: false, text: "Có, tôi thích", audioSrc: "/assets/audio/vietnamese/unit_4/vi_co_toi_thich.mp3" },
    { challengeId: 42047, correct: false, text: "Tôi thích cà phê", audioSrc: "/assets/audio/vietnamese/unit_4/vi_toi_thich_ca_phe.mp3" },

    { challengeId: 42048, correct: false, text: "Không, tôi không có", audioSrc: "/assets/audio/vietnamese/unit_4/vi_khong_toi_khong_co.mp3" },
    { challengeId: 42048, correct: true, text: "Có, tôi có", audioSrc: "/assets/audio/vietnamese/unit_4/vi_co_toi_co.mp3" }, // Moved correct answer
    { challengeId: 42048, correct: false, text: "Tôi có", audioSrc: "/assets/audio/vietnamese/unit_4/vi_toi_co.mp3" },

    // U4-L41017
    { challengeId: 42049, correct: false, text: "Chúng tôi đã học tiếng Việt", audioSrc: "/assets/audio/vietnamese/unit_4/vi_chung_toi_da_hoc_tieng_viet.mp3" },
    { challengeId: 42049, correct: true, text: "Chúng tôi học tiếng Việt", audioSrc: "/assets/audio/vietnamese/unit_4/vi_chung_toi_hoc_tieng_viet.mp3" }, // Moved correct answer
    { challengeId: 42049, correct: false, text: "Chúng tôi sẽ học tiếng Việt", audioSrc: "/assets/audio/vietnamese/unit_4/vi_chung_toi_se_hoc_tieng_viet.mp3" },

    { challengeId: 42050, correct: false, text: "Mỗi sáng cô ấy đã uống trà", audioSrc: "/assets/audio/vietnamese/unit_4/vi_moi_sang_co_ay_da_uong_tra.mp3" },
    { challengeId: 42050, correct: false, text: "Mỗi sáng cô ấy sẽ uống trà", audioSrc: "/assets/audio/vietnamese/unit_4/vi_moi_sang_co_ay_se_uong_tra.mp3" },
    { challengeId: 42050, correct: true, text: "Mỗi sáng cô ấy uống trà", audioSrc: "/assets/audio/vietnamese/unit_4/vi_moi_sang_co_ay_uong_tra.mp3" }, // Moved correct answer

    { challengeId: 42051, correct: true, text: "Họ sống ở Hà Nội", audioSrc: "/assets/audio/vietnamese/unit_4/vi_ho_song_o_ha_noi.mp3" },
    { challengeId: 42051, correct: false, text: "Họ đã sống ở Hà Nội", audioSrc: "/assets/audio/vietnamese/unit_4/vi_ho_da_song_o_ha_noi.mp3" },
    { challengeId: 42051, correct: false, text: "Họ sẽ sống ở Hà Nội", audioSrc: "/assets/audio/vietnamese/unit_4/vi_ho_se_song_o_ha_noi.mp3" },

    // U4-L41018
    { challengeId: 42052, correct: false, text: "Hôm qua tôi xem phim", audioSrc: "/assets/audio/vietnamese/unit_4/vi_hom_qua_toi_xem_phim.mp3" },
    { challengeId: 42052, correct: true, text: "Hôm qua tôi đã xem phim", audioSrc: "/assets/audio/vietnamese/unit_4/vi_hom_qua_toi_da_xem_phim.mp3" }, // Moved correct answer
    { challengeId: 42052, correct: false, text: "Ngày mai tôi sẽ xem phim", audioSrc: "/assets/audio/vietnamese/unit_4/vi_ngay_mai_toi_se_xem_phim.mp3" },

    { challengeId: 42053, correct: true, text: "Tuần trước anh ấy đã đi du lịch", audioSrc: "/assets/audio/vietnamese/unit_4/vi_tuan_truoc_anh_ay_da_di_du_lich.mp3" }, // Moved correct answer
    { challengeId: 42053, correct: false, text: "Tuần trước anh ấy đi du lịch", audioSrc: "/assets/audio/vietnamese/unit_4/vi_tuan_truoc_anh_ay_di_du_lich.mp3" },
    { challengeId: 42053, correct: false, text: "Tuần sau anh ấy sẽ đi du lịch", audioSrc: "/assets/audio/vietnamese/unit_4/vi_tuan_sau_anh_ay_se_di_du_lich.mp3" },

    { challengeId: 42054, correct: false, text: "Cô ấy mua một cuốn sách mới", audioSrc: "/assets/audio/vietnamese/unit_4/vi_co_ay_mua_mot_cuon_sach_moi.mp3" },
    { challengeId: 42054, correct: true, text: "Cô ấy đã mua một cuốn sách mới", audioSrc: "/assets/audio/vietnamese/unit_4/vi_co_ay_da_mua_mot_cuon_sach_moi.mp3" }, // Moved correct answer
    { challengeId: 42054, correct: false, text: "Cô ấy sẽ mua một cuốn sách mới", audioSrc: "/assets/audio/vietnamese/unit_4/vi_co_ay_se_mua_mot_cuon_sach_moi.mp3" },

    // U4-L41019
    { challengeId: 42055, correct: false, text: "Chúng tôi ăn tối vào lúc 7 giờ", audioSrc: "/assets/audio/vietnamese/unit_4/vi_chung_toi_an_toi_bay_gio.mp3" },
    { challengeId: 42055, correct: true, text: "Chúng tôi sẽ ăn tối vào lúc 7 giờ", audioSrc: "/assets/audio/vietnamese/unit_4/vi_chung_toi_se_an_toi_bay_gio.mp3" }, // Moved correct answer
    { challengeId: 42055, correct: false, text: "Chúng tôi đã ăn tối vào lúc 7 giờ", audioSrc: "/assets/audio/vietnamese/unit_4/vi_chung_toi_da_an_toi_bay_gio.mp3" },

    { challengeId: 42056, correct: true, text: "Năm sau tôi sẽ đi Việt Nam", audioSrc: "/assets/audio/vietnamese/unit_4/vi_nam_sau_toi_se_di_viet_nam.mp3" }, // Moved correct answer
    { challengeId: 42056, correct: false, text: "Năm sau tôi đi Việt Nam", audioSrc: "/assets/audio/vietnamese/unit_4/vi_nam_sau_toi_di_viet_nam.mp3" },
    { challengeId: 42056, correct: false, text: "Năm ngoái tôi đã đi Việt Nam", audioSrc: "/assets/audio/vietnamese/unit_4/vi_nam_ngoai_toi_da_di_viet_nam.mp3" },

    { challengeId: 42057, correct: false, text: "Anh ấy gọi điện cho bạn sau", audioSrc: "/assets/audio/vietnamese/unit_4/vi_anh_ay_goi_dien_cho_ban_sau.mp3" },
    { challengeId: 42057, correct: true, text: "Anh ấy sẽ gọi điện cho bạn sau", audioSrc: "/assets/audio/vietnamese/unit_4/vi_anh_ay_se_goi_dien_cho_ban_sau.mp3" }, // Moved correct answer
    { challengeId: 42057, correct: false, text: "Anh ấy đã gọi điện cho bạn sau", audioSrc: "/assets/audio/vietnamese/unit_4/vi_anh_ay_da_goi_dien_cho_ban_sau.mp3" },

    // U4-L41020
    { challengeId: 42058, correct: false, text: "nhưng", audioSrc: "/assets/audio/vietnamese/unit_4/vi_nhung.mp3" },
    { challengeId: 42058, correct: false, text: "hoặc", audioSrc: "/assets/audio/vietnamese/unit_4/vi_hoac.mp3" },
    { challengeId: 42058, correct: true, text: "và", audioSrc: "/assets/audio/vietnamese/unit_4/vi_va.mp3" }, // Moved correct answer

    { challengeId: 42059, correct: true, text: "nhưng", audioSrc: "/assets/audio/vietnamese/unit_4/vi_nhung.mp3" },
    { challengeId: 42059, correct: false, text: "vì vậy", audioSrc: "/assets/audio/vietnamese/unit_4/vi_vi_vay.mp3" },
    { challengeId: 42059, correct: false, text: "và", audioSrc: "/assets/audio/vietnamese/unit_4/vi_va.mp3" },

    { challengeId: 42060, correct: false, text: "và", audioSrc: "/assets/audio/vietnamese/unit_4/vi_va.mp3" },
    { challengeId: 42060, correct: false, text: "nhưng", audioSrc: "/assets/audio/vietnamese/unit_4/vi_nhung.mp3" },
    { challengeId: 42060, correct: true, text: "hoặc", audioSrc: "/assets/audio/vietnamese/unit_4/vi_hoac.mp3" },

    // U5-L41021
    { challengeId: 42061, correct: false, text: "Tôi buồn", audioSrc: "/assets/audio/vietnamese/unit_5/vi_toi_buon.mp3" },
    { challengeId: 42061, correct: false, text: "Tôi giận", audioSrc: "/assets/audio/vietnamese/unit_5/vi_toi_gian.mp3" },
    { challengeId: 42061, correct: true, text: "Tôi hạnh phúc", audioSrc: "/assets/audio/vietnamese/unit_5/vi_toi_hanh_phuc.mp3" }, // Moved correct answer

    { challengeId: 42062, correct: true, text: "Tôi mệt mỏi", audioSrc: "/assets/audio/vietnamese/unit_5/vi_toi_met_moi.mp3" }, // Moved correct answer
    { challengeId: 42062, correct: false, text: "Tôi vui vẻ", audioSrc: "/assets/audio/vietnamese/unit_5/vi_toi_vui_ve.mp3" },
    { challengeId: 42062, correct: false, text: "Tôi phấn khởi", audioSrc: "/assets/audio/vietnamese/unit_5/vi_toi_phan_khoi.mp3" },

    { challengeId: 42063, correct: false, text: "tức giận", audioSrc: "/assets/audio/vietnamese/unit_5/vi_tuc_gian.mp3" },
    { challengeId: 42063, correct: true, text: "ngạc nhiên", audioSrc: "/assets/audio/vietnamese/unit_5/vi_ngac_nhien.mp3" }, // Moved correct answer
    { challengeId: 42063, correct: false, text: "thất vọng", audioSrc: "/assets/audio/vietnamese/unit_5/vi_that_vong.mp3" },

    // U5-L41022
    { challengeId: 42064, correct: false, text: "đồng nghiệp", audioSrc: "/assets/audio/vietnamese/unit_5/vi_dong_nghiep.mp3" },
    { challengeId: 42064, correct: false, text: "nhân viên", audioSrc: "/assets/audio/vietnamese/unit_5/vi_nhan_vien.mp3" },
    { challengeId: 42064, correct: true, text: "sếp", audioSrc: "/assets/audio/vietnamese/unit_5/vi_sep.mp3" }, // Moved correct answer

    { challengeId: 42065, correct: true, text: "cuộc họp", audioSrc: "/assets/audio/vietnamese/unit_5/vi_cuoc_hop.mp3" },
    { challengeId: 42065, correct: false, text: "thảo luận", audioSrc: "/assets/audio/vietnamese/unit_5/vi_thao_luan.mp3" },
    { challengeId: 42065, correct: false, text: "hội nghị", audioSrc: "/assets/audio/vietnamese/unit_5/vi_hoi_nghi.mp3" },

    { challengeId: 42066, correct: true, text: "nhiệm vụ", audioSrc: "/assets/audio/vietnamese/unit_5/vi_nhiem_vu.mp3" }, // Changed to 'nhiệm vụ' (task)
    { challengeId: 42066, correct: false, text: "báo cáo", audioSrc: "/assets/audio/vietnamese/unit_5/vi_bao_cao.mp3" },
    { challengeId: 42066, correct: false, text: "dự án", audioSrc: "/assets/audio/vietnamese/unit_5/vi_du_an.mp3" },

    // U5-L41023
    { challengeId: 42067, correct: false, text: "tiền thuê nhà", audioSrc: "/assets/audio/vietnamese/unit_5/vi_tien_thue_nha.mp3" },
    { challengeId: 42067, correct: false, text: "hợp đồng", audioSrc: "/assets/audio/vietnamese/unit_5/vi_hop_dong.mp3" },
    { challengeId: 42067, correct: true, text: "tiền đặt cọc", audioSrc: "/assets/audio/vietnamese/unit_5/vi_tien_dat_coc.mp3" }, // Moved correct answer

    { challengeId: 42068, correct: true, text: "Chi phí sinh hoạt hàng tháng là bao nhiêu?", audioSrc: "/assets/audio/vietnamese/unit_5/vi_chi_phi_sinh_hoat_bao_nhieu.mp3" }, // New question
    { challengeId: 42068, correct: false, text: "Giá nhà bao nhiêu?", audioSrc: "/assets/audio/vietnamese/unit_5/vi_gia_nha_bao_nhieu.mp3" },
    { challengeId: 42068, correct: false, text: "Nhà có internet không?", audioSrc: "/assets/audio/vietnamese/unit_5/vi_nha_co_internet_khong.mp3" },

    { challengeId: 42069, correct: false, text: "người thuê nhà", audioSrc: "/assets/audio/vietnamese/unit_5/vi_nguoi_thue_nha.mp3" },
    { challengeId: 42069, correct: true, text: "chủ nhà", audioSrc: "/assets/audio/vietnamese/unit_5/vi_chu_nha.mp3" }, // Moved correct answer
    { challengeId: 42069, correct: false, text: "môi giới", audioSrc: "/assets/audio/vietnamese/unit_5/vi_moi_gioi.mp3" },

    // U5-L41024
    { challengeId: 42070, correct: false, text: "hành trình", audioSrc: "/assets/audio/vietnamese/unit_5/vi_hanh_trinh.mp3" },
    { challengeId: 42070, correct: true, text: "điểm đến", audioSrc: "/assets/audio/vietnamese/unit_5/vi_diem_den.mp3" }, // Moved correct answer
    { challengeId: 42070, correct: false, text: "chuyến đi", audioSrc: "/assets/audio/vietnamese/unit_5/vi_chuyen_di.mp3" },

    { challengeId: 42071, correct: false, text: "đặt vé", audioSrc: "/assets/audio/vietnamese/unit_5/vi_dat_ve.mp3" },
    { challengeId: 42071, correct: true, text: "đặt phòng khách sạn", audioSrc: "/assets/audio/vietnamese/unit_5/vi_dat_phong_khach_san.mp3" }, // Moved correct answer
    { challengeId: 42071, correct: false, text: "đặt xe", audioSrc: "/assets/audio/vietnamese/unit_5/vi_dat_xe.mp3" },

    { challengeId: 42072, correct: false, text: "hộ chiếu", audioSrc: "/assets/audio/vietnamese/unit_5/vi_ho_chieu.mp3" },
    { challengeId: 42072, correct: false, text: "thẻ lên máy bay", audioSrc: "/assets/audio/vietnamese/unit_5/vi_the_len_may_bay.mp3" },
    { challengeId: 42072, correct: true, text: "visa", audioSrc: "/assets/audio/vietnamese/unit_5/vi_visa.mp3" }, // Moved correct answer

    // U5-L41025
    { challengeId: 42073, correct: false, text: "Bún chả", audioSrc: "/assets/audio/vietnamese/unit_5/vi_bun_cha.mp3" },
    { challengeId: 42073, correct: true, text: "Phở", audioSrc: "/assets/audio/vietnamese/unit_5/vi_pho.mp3" }, // Changed to Phở, moved correct answer
    { challengeId: 42073, correct: false, text: "Gỏi cuốn", audioSrc: "/assets/audio/vietnamese/unit_5/vi_goi_cuon.mp3" },

    { challengeId: 42074, correct: true, text: "Tết Nguyên Đán", audioSrc: "/assets/audio/vietnamese/unit_5/vi_tet_nguyen_dan.mp3" }, // Changed to Tết Nguyên Đán
    { challengeId: 42074, correct: false, text: "Lễ Giỗ Tổ Hùng Vương", audioSrc: "/assets/audio/vietnamese/unit_5/vi_le_gio_to_hung_vuong.mp3" },
    { challengeId: 42074, correct: false, text: "Lễ hội Chùa Hương", audioSrc: "/assets/audio/vietnamese/unit_5/vi_le_hoi_chua_huong.mp3" },

    { challengeId: 42075, correct: false, text: "tập quán", audioSrc: "/assets/audio/vietnamese/unit_5/vi_tap_quan.mp3" },
    { challengeId: 42075, correct: false, text: "dân tộc", audioSrc: "/assets/audio/vietnamese/unit_5/vi_dan_toc.mp3" },
    { challengeId: 42075, correct: true, text: "văn hóa", audioSrc: "/assets/audio/vietnamese/unit_5/vi_van_hoa.mp3" }, // Moved correct answer
] as const;