export class PageComponent {
    private element: HTMLUListElement;
    constructor() {
        // Page 생성
        this.element = document.createElement('ul');
        this.element.setAttribute('class', 'page');
        this.element.textContent = 'This is ComponentPage';
    }
    // API
    // 외부에서 프로퍼티를 받아와서, 원하는 위치에 Element를 추가
    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}
