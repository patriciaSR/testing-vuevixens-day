import {
  addEventToTag,
  findImage,
  createTag,
  createSelectTag,
} from '../js/createTags.js';

import { photos } from '../js/photos.js';
import { mockPhotos, totoroImg } from './fixtures/variables-fixtures.js';

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

  describe('findImage function', () => {
    test('it finds a image src with a name', () => {
      const { name } = mockPhotos[0];

      const expected = mockPhotos[0].photo;

      const result = findImage(name, mockPhotos);

      expect(result).toBe(expected);
    });

    test('it returns a default image src with no matching name', () => {
      const name = 'lola';
      const defaultPhoto = totoroImg;

      const result = findImage(name, mockPhotos);

      expect(result).toBe(defaultPhoto);
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

    test('it creates a <img> with class, src and alt', () => {
      const tagName = 'img';
      const text = 'foo';
      const className = 'foo';
      const src = findImage(text, photos);

      const result = createTag(tagName, text, className);

      expect(result.tagName).toBe(tagName.toUpperCase());
      expect(result.alt).toBe(text);
      expect(result.src).toBe(src);
      expect(result.classList).toContain(className);
    });
  });

  describe('createSelectorTag function', () => {
    test('it creates a select node with 4 options', () => {
      const options = ['patricia', 'paco', 'luis'];
      const defaultText = 'foo';
      const className = 'foo';

      const result = createSelectTag(options, defaultText, className);
      const select = result.querySelector(`.${className}__select`);
      const option = result.querySelector(`.${className}__option`);

      expect(select.tagName).toBe('SELECT');
      expect(select.length).toBe(4);
      expect(select.classList).toContain(`${className}__select`);

      expect(option.tagName).toBe('OPTION');
      expect(option.textContent).toBe(defaultText);
      expect(option.classList).toContain(`${className}__option`);
    });
  });
});
