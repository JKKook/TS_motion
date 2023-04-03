export class ImageComponent {
    private element: HTMLElement;
    constructor(title: string, url: string) {
        const template = document.createElement('template');
        template.innerHTML = `<section class="image">
        <div class="image__holder"><img class="image__thumbnail"></div>
        <p class="image__title"></p>
    </section>`;
        // template section, image와 p 태그를 담을 것임
        this.element = template.content.firstElementChild! as HTMLElement;

        // imageElement, <img> 태그 속성을 사용하기 위해 HTMLImageElement가 들어갈 것이라고 타입 선언이 필요!
        const imageElement = this.element.querySelector(
            '.image__thumbnail',
        )! as HTMLImageElement;
        imageElement.src = url;
        imageElement.alt = title;

        // titleElement, <p> 태그 속성을 사용하기 위해 HTMLParagraphElement가 들어갈 것이라고 타입 선언이 필요!
        const titleElement = this.element.querySelector(
            '.image__title',
        )! as HTMLParagraphElement;
        titleElement.textContent = title;
    }
    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}
