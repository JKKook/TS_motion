import { PageComponent } from './components/page/page.js';
import { ImageComponent } from './components/page/item/image.js';

class App {
    private readonly page: PageComponent;
    // 최상위에 추가시킬 요소
    constructor(appRoot: HTMLElement) {
        // 새로운 페이지 컴포넌트를 만듦
        this.page = new PageComponent();
        // 새로운 페이지는 appRoot에 부착할 것임
        this.page.attachTo(appRoot);

        const image = new ImageComponent(
            'Image Title',
            'https://cdn.pixabay.com/photo/2018/04/08/09/10/cherry-blossom-3300758_1280.jpg',
        );
        image.attachTo(appRoot, 'beforeend');
    }
}

/**
 * type Assertion 필요
 * querySelector은 기본적으로 Element와 null 타입으로 되어 있음.
 * 하지만 document는 Html 시멘틱 태그요소와 연결시켜야 하기 떄문에 null 타입은 무조건 없을 거라고 강제 해야 함.
 */

new App(document.querySelector('.document')! as HTMLElement);
