/**
 * main, renderer process 에서 공용으로 사용하는 Utils.
 * 그러므로 이 클래스는 모듈 연결상 EndPoint 가 되어야 한다.
 * 다른 어떤 추가 라이브러리도 필요 없고, 모든 곳에서 사용될 수 있는 함수만 존재한다.
 */
class CommonUtils {
    /**
     * 4자리 랜덤값을 생성한다. 이 함수는 Entry.generateHash 와 완전동일하다.
     * Import 된 오브젝트를 엔트리 오브젝트 메타데이터로 만들 때 사용한다.
     * entryjs 의 해당 유틸함수 로직이 바뀌면 같이 바뀌어야 한다.
     *
     * @see Entry.generateHash
     * @return {string} 4자리 값
     */
    static generateHash() {
        return Math.random()
            .toString(36)
            .substr(2, 4);
    }

    /**
     * 확장자 앞에 . 을 붙여준다. 확장자가 없는 경우 defaultExtension 을 반환한다.
     *
     * @param {string}extension 확장자
     * @param {string=}defaultExtension extension 이 falsy 인 경우 반환
     * @return {string} . 이 붙은 확장자
     */
    static sanitizeExtension(extension, defaultExtension) {
        let sanitizedExt = extension || defaultExtension;
        if (!sanitizedExt.startsWith('.')) {
            sanitizedExt = `.${sanitizedExt}`;
        }
        return sanitizedExt;
    }
}

export default CommonUtils;