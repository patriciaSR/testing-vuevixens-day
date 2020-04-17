import { addEventToTag, createTag } from '../js/createTags.js';

describe('createTags module', () => {
  describe('addEventListener function', () => {
    test('it add listener to any tag', () => {
      document.body.innerHTML = '<div></div>';

      const newTag = document.querySelector('div');
      const event = 'click';
      const func = jest.fn();

      addEventToTag(newTag, event, func);
      newTag.click();

      expect(func).toHaveBeenCalledTimes(1);
    });
  });

  describe('createTag function', () => {
    test('it creates a <div> with text', () => {
      const tagName = 'div';
      const text = 'foo';

      const result = createTag(tagName, text);

      expect(result.tagName).toBe(tagName.toUpperCase());
      expect(result.textContent).toBe(text);
    });

    test('it creates a <p> with text and class', () => {
      const tagName = 'p';
      const text = 'foo';
      const className = 'foo';

      const result = createTag(tagName, text, className);

      expect(result.tagName).toBe(tagName.toUpperCase());
      expect(result.textContent).toBe(text);
      expect(result.classList).toContain(className);
      // Other option:
      // expect(result.classList.contains(className)).toBeTruthy();
    });
  });
});
