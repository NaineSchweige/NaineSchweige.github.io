function openModal(projectId) {
    const modalContainer = document.getElementById('modal-container');
    
    switch (projectId) {
        case 'project1':
            modalContainer.innerHTML = `
                <h1 class="modal-title">個人作品活動＿世界観及び登場人物イラスト</h1>
                <p class="modal-description"><span class = "bold">プロジェクト概要:</span> 自作世界観IPのイラスト制作</p>
                <p class="modal-description"><span class = "bold">プロジェクト作業期間:</span> 1枚あたり15時間から20時間</p>
                <p class="modal-description"><span class = "bold">プロジェクト作業の内容:</span> 世界観制作、イラスト化作業 </p>
                <p class="modal-description"><span class = "bold">プロジェクト作業の結果:</span> 世界観登場人物イラスト3枚</p>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" style="width:100%">
                            <a class="flex-box" href = "https://www.pixiv.net/artworks/97058754">
                                <img class="modal-image" src="assets/img/sliderimg_1_1.png" alt="슬라이드 1">
                            </a>
                        </div>
                        <div class="swiper-slide" style="width:100%">
                            <a class="flex-box" href = "https://www.pixiv.net/artworks/98092974">
                               <img class="modal-image" src="assets/img/sliderimg_1_2.png" alt="슬라이드 2">
                            </a>
                        </div>
                        <div class="swiper-slide" style="width:100%">
                            <a class="flex-box" href = "https://www.pixiv.net/artworks/99728977">
                               <img class="modal-image" src="assets/img/sliderimg_1_3.png" alt="슬라이드 3">
                            </a> 
                        </div>
                    </div>
                </div>
                <h2 class="modal-title">2時創作などのイラスト</h2>
                <p class="modal-description"><span class = "bold">プロジェクト概要:</span> 二次創作のイラスト達</p>
                <p class="modal-description"><span class = "bold">プロジェクト作業期間:</span> 1枚あたり15時間から20時間</p>
                <p class="modal-description"><span class = "bold">プロジェクト作業の内容:</span> イラスト作業 </p>
                <p class="modal-description"><span class = "bold">プロジェクト作業の結果:</span> 3枚の2時創作イラストと創作イラスト</p>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a class="flex-box" href = "https://www.pixiv.net/artworks/97286136">
                                <img class="modal-image" src="assets/img/sliderimg_2_1.png" alt="슬라이드 1">
                            </a> 
                        </div>
                        <div class="swiper-slide">
                            <a class="flex-box" href = "https://www.pixiv.net/artworks/99553681">
                                <img class="modal-image" src="assets/img/sliderimg_2_2.png" alt="슬라이드 2">
                            </a> 
                        </div>
                        <div class="swiper-slide">
                            <a class="flex-box" href = "https://www.pixiv.net/artworks/103048090">
                                <img class="modal-image" src="assets/img/sliderimg_2_3.png" alt="슬라이드 3">
                            </a> 
                        </div>
                        <div class="swiper-slide">
                            <a class="flex-box" href = "https://www.pixiv.net/artworks/103925804">
                                <img class="modal-image" src="assets/img/sliderimg_2_4.png" alt="슬라이드 4">
                            </a> 
                        </div>
                        <div class="swiper-slide">
                            <a class="flex-box" href = "https://www.pixiv.net/artworks/108903582">
                                <img class="modal-image" src="assets/img/sliderimg_2_5.png" alt="슬라이드 5">
                            </a> 
                        </div>
                    </div>
                </div>
                <h2 class="modal-title">アルバンソサイエティ＆ディプシー</h2>
                <p class="modal-description"><span class = "bold">プロジェクト概要:</span> 独自世界観アルバンソサイエティ＆ディプシーのシリーズ作品</p>
                <p class="modal-description"><span class = "bold">プロジェクト作業期間:</span> 2022年3月10日～2023年05月07日</p>
                <p class="modal-description"><span class = "bold">プロジェクト作業の内容:</span> 世界観制作、小説化 </p>
                <p class="modal-description"><span class = "bold">プロジェクト作業の結果:</span> 一つのシリーズ作品を長期間投稿して来た結果物</span> </p>
                <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=17163632">
                            <img class="modal-image" src="assets/img/sliderimg_3_1.png" alt="슬라이드 1">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=17254206">
                            <img class="modal-image" src="assets/img/sliderimg_3_2.png" alt="슬라이드 2">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=17346846">
                            <img class="modal-image" src="assets/img/sliderimg_3_3.png" alt="슬라이드 3">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=17390786">
                            <img class="modal-image" src="assets/img/sliderimg_3_4.png" alt="슬라이드 4">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=17444776">
                            <img class="modal-image" src="assets/img/sliderimg_3_5.png" alt="슬라이드 5">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=17476751">
                            <img class="modal-image" src="assets/img/sliderimg_3_6.png" alt="슬라이드 6">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=17571178">
                            <img class="modal-image" src="assets/img/sliderimg_3_7.png" alt="슬라이드 7">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=17744595">
                            <img class="modal-image" src="assets/img/sliderimg_3_8.png" alt="슬라이드 8">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=17870464">
                            <img class="modal-image" src="assets/img/sliderimg_3_9.png" alt="슬라이드 9">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=18236714">
                            <img class="modal-image" src="assets/img/sliderimg_3_10.png" alt="슬라이드 10">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=18278308">
                            <img class="modal-image" src="assets/img/sliderimg_3_11.png" alt="슬라이드 11">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=18712793">
                            <img class="modal-image" src="assets/img/sliderimg_3_12.png" alt="슬라이드 12">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=19705958">
                            <img class="modal-image" src="assets/img/sliderimg_3_13.png" alt="슬라이드 13">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=19841765">
                            <img class="modal-image" src="assets/img/sliderimg_3_14.png" alt="슬라이드 14">
                        </a>
                    </div>
                    </div>
                </div>
                <h2 class="modal-title">キャラクター外伝</h2>
                <p class="modal-description"><span class = "bold">プロジェクト概要:</span> 独自の世界観の中の登場人物たちの背景物語 </p>
                <p class="modal-description"><span class = "bold">プロジェクト作業期間:</span> 一本あたり平均20~25時間 </p>
                <p class="modal-description"><span class = "bold">プロジェクト作業の内容:</span> 世界観制作、小説化 </p>
                <p class="modal-description"><span class = "bold">プロジェクト作業の結果:</span> 世界観中の登場人物たちのそれぞれの物語</p>
                <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=16423658">
                            <img class="modal-image" src="assets/img/sliderimg_4_1.png" alt="슬라이드 1">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=16449629">
                            <img class="modal-image" src="assets/img/sliderimg_4_2.png" alt="슬라이드 2">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=16484392">
                            <img class="modal-image" src="assets/img/sliderimg_4_3.png" alt="슬라이드 3">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=16518614">
                            <img class="modal-image" src="assets/img/sliderimg_4_4.png" alt="슬라이드 4">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=16567288">
                            <img class="modal-image" src="assets/img/sliderimg_4_5.png" alt="슬라이드 5">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=16602962">
                            <img class="modal-image" src="assets/img/sliderimg_4_6.png" alt="슬라이드 6">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=16766595">
                            <img class="modal-image" src="assets/img/sliderimg_4_7.png" alt="슬라이드 7">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=16793707">
                            <img class="modal-image" src="assets/img/sliderimg_4_8.png" alt="슬라이드 8">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=16835713">
                            <img class="modal-image" src="assets/img/sliderimg_4_9.png" alt="슬라이드 9">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a class="flex-box" href="https://www.pixiv.net/novel/show.php?id=16890510">
                            <img class="modal-image" src="assets/img/sliderimg_4_9.png" alt="슬라이드 10">
                        </a>
                    </div>
                    </div>
                </div>
            `;
            const swiper = new Swiper('.swiper-container', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            break;
        case 'project2':
            modalContainer.innerHTML = `
                <h1 class="modal-title">Project_GWAN</h1>
                <p class="modal-description"><span class= "bold">プロジェクト概要:</span> TRPGゲームのPCゲーム化プロジェクト</p>
                <p class="modal-description"><span class= "bold">プロジェクト作業期間:</span> 2022年11月8日~2023年11月8日~現在</p>
                <p class="modal-description"><span class = "bold">プロジェクト作業の内容:</span> 世界観制作、システム企画、シナリオ作成、イラスト作業、PM等総括 </p>
                <p class="modal-description"><span class= "bold">プロジェクト作業の結果:</span> 世界観(IP)/登場人物設定/G-HOP(京畿南部大学創業連合キャンプ)で最優秀賞受賞など</p>
                <div class="flex-box">
                    <img class="modal-image" src="assets/img/project2.png" alt="프로젝트 2 상세 이미지">
                </div>
            `;
            break;
        case 'project3':
            modalContainer.innerHTML = `
                <h1 class="modal-title">Project_NINE</h1>
                <p class="modal-description"><span class= "bold">プロジェクト概要:</span> ターン制型デッキビル ローグライクゲームプロジェクト（大学卒業プロジェクト）</p>
                <p class="modal-description"><span class= "bold">プロジェクト作業期間:</span> 2024年02月03日~2024年09月29日</p>
                <p class="modal-description"><span class = "bold">プロジェクト作業の内容:</span> インゲームシステム及び機能開発 </p>
                <p class="modal-description"><span class= "bold">プロジェクト作業の結果:</span> ゲームアルファテストバージョン及びテスト映像</p>
                <div class="flex-box">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/uMhdrTzzSvA?si=Irvpx0KLUJhByd5r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            `;
            break;
        case 'project4':
            modalContainer.innerHTML = `
                <h1 class="Project:EIDOS</h1>
                <p class="modal-description"><span class= "bold">プロジェクト概要:</span> 個人放送配信者向けのアドベンチャージャンルのランダム性が強いカードゲームプロジェクト</p>
                <p class="modal-description"><span class= "bold">プロジェクト作業期間:</span> 2024年7月5日~現在</p>
                <p class="modal-description"><span class = "bold">プロジェクト作業の内容:</span> 世界観制作/シナリオ作成など、アウトゲーム要素の総括とキャラクターデザイン及び2D animationなどのグラフィックリソース製作および検収などのアートディレクティング総括</p>
                <p class="modal-description"><span class= "bold">プロジェクト作業の結果:</span> 世界観(IP)/登場人物設定/G-HOP(京畿南部大学創業連合キャンプ)で最優秀賞受賞など</p>
                <div class="flex-box">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vAebdybmd_Y?si=vYb1vyQt_HmDp7SM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            `;
            break;
        case 'project5':
            modalContainer.innerHTML = `
                <h1 class="Project_D.sent</h1>
                <p class="modal-description"><span class= "bold">プロジェクト概要:</span> TRPGゲームのPCゲーム化プロジェクト</p>
                <p class="modal-description"><span class= "bold">プロジェクト作業期間:</sapn> 2022年11月8日~2023年11月8日~現在</p>
                <p class="modal-description"><span class = "bold">プロジェクト作業の内容:</span> 世界観制作、システム企画、シナリオ作成、イラスト作業、PM等総括 </p>
                <p class="modal-description"><span class= "bold">プロジェクト作業の結果:</span> 世界観(IP)/登場人物設定/G-HOP(京畿南部大学創業連合キャンプ)で最優秀賞受賞など</p>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="flex-box">
                                <img class="modal-image" src="assets/img/milla_1.png" alt="슬라이드 1">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="flex-box">
                                <img class="modal-image" src="assets/img/milla_2.png" alt="슬라이드 2">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="flex-box">
                                img class="modal-image" src="assets/img/milla_3.png" alt="슬라이드 3">
                            </div>
                        </div>
                    </div>
                </div>
                <h1 class="modal-title">프로젝트 5 제목</h1>
                <p class="modal-description">프로젝트 5의 상세 내용입니다. 이 프로젝트는 ...</p>
                <div class="flex-box">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OGgvPJ5uWV8?si=9gO7KDbY_Om_mOd2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            `;
            const swiperProject5 = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    const modal = document.getElementById('modal');
    modal.style.display = "block"; // 모달 열기
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none"; // 모달 닫기
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const skills = document.querySelectorAll('.skill_label');

        // 모든 스킬 숨기기
        skills.forEach(skill => {
            skill.style.display = 'none'; // 기본적으로 모든 스킬을 숨김
        });

        // 선택한 카테고리에 따라 스킬 표시
        if (category === 'all') {
            skills.forEach(skill => {
                skill.style.display = 'block'; // 모든 스킬 표시
            });
        } else {
            const selectedSkills = document.querySelectorAll(`.${category.replace(/^(\d)/, '\\$1')}`);
            selectedSkills.forEach(skill => {
                skill.style.display = 'block'; // 선택한 카테고리의 스킬만 표시
            });
        }
    });
});
document.querySelectorAll('.progress-circle').forEach(circle => {
    const progressText = circle.querySelector('.inside-circle');
    const progressValue = circle.getAttribute('data-progress');
    const radius = circle.querySelector('.progress').r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    // 원 둘레를 설정합니다.
    circle.querySelector('.progress').style.strokeDasharray = `${circumference} ${circumference}`;
    circle.querySelector('.progress').style.strokeDashoffset = `${circumference}`;

    // 진행률에 따라 회전 각도를 계산합니다.
    const offset = circumference - (progressValue / 100 * circumference);
    circle.querySelector('.progress').style.strokeDashoffset = offset;

    // 내부 텍스트 설정
    progressText.innerHTML = `${progressValue}%`;
});

document.querySelectorAll('.circle-wrap').forEach(circleWrap => {
    const progressText = circleWrap.querySelector('.inside-circle');
    const progressValue = parseFloat(progressText.textContent); // 진행률을 가져옵니다.
    const radius = 40; // 원의 반지름
    const circumference = 2 * Math.PI * radius;

    // 원 둘레를 설정합니다.
    const fill = circleWrap.querySelector('.fill');
    fill.style.strokeDasharray = `${circumference} ${circumference}`;
    fill.style.strokeDashoffset = `${circumference}`;

    // 진행률에 따라 회전 각도를 계산합니다.
    const offset = circumference - (progressValue / 100 * circumference);
    fill.style.strokeDashoffset = offset;

    // 내부 텍스트 설정
    progressText.innerHTML = `${progressValue}<span>%</span>`;
});
