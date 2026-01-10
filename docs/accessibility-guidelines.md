# AccessGuide.io - Accessibility Guidelines Reference

*Compiled from [Access Guide](https://www.accessguide.io/) - a friendly introduction to digital accessibility based on WCAG 2.1*

---

## 1. Hover and Focus Best Practices

> WCAG criterion [1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html) (Level AA)

### Why This is Important

If content appears and disappears on hover or focus, this can feel frustrating, unpredictable, and disruptive. Use best practices to make hover and focus more predictable and less likely to cause errors.

This is especially accessible for:
- People with **physical disabilities** (unpredictable or specific movement)
- People with **visual disabilities** (screen reader users)
- People with **cognitive disabilities**

### Implementation Guidelines

#### Dismissible
There should be a way to dismiss new content **without moving hover or changing focus**. This prevents disrupting users in the middle of tasks.

**Best practice:** Use the "Escape" key to dismiss content.

#### Hoverable
New content should **remain visible if the user hovers over it**.

Sometimes content appears when hovering the trigger element but disappears when hovering over the new content. This is frustrating. The content must remain visible whether hover is on the trigger OR the content itself.

#### Persistent
Content must remain visible until:
- The user dismisses it
- The user moves the mouse off of it or the trigger
- The content no longer contains important information

---

## 2. Keyboard Accessibility

> WCAG criterion [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) (Level A)

### Why This is Important

Full keyboard functionality is essential for:
- People who rely on keyboards
- Blind/visually impaired people using screen readers
- People with motor disabilities who can't use a mouse

**All functionality available to mouse users should be available to keyboard users.**

### Basic Keyboard Access

Keyboard accessibility is enabled by default in browsers. **Don't remove or deactivate these defaults** - enhance them instead.

Keyboard accessibility includes:
- ✅ Visible focus indicator
- ✅ Intuitive focus order
- ✅ Skip links to bypass repeating content
- ✅ Way to turn off character key shortcuts
- ✅ No keyboard traps

**Common keyboard-accessible interactions:**
- Browsing navigation
- Filling out forms
- Accessing buttons and links

### Advanced Keyboard Access

For complex interactions (drawing programs, drag-and-drop):
- Translate gestures into keyboard commands
- Use **Tab, Enter, Space, and Arrow keys** (most common)

**Examples from Salesforce:**
- Interact with a canvas (move/resize objects)
- Move between lists
- Sort lists

---

## 3. Focus Indicator Visibility

> WCAG criterion [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html) (Level AA)

### Why This is Important

A visible focus indicator shows keyboard users what element they're currently interacting with.

Benefits:
- Shows what element is ready for user input
- Helps people with executive dysfunction
- Reduces cognitive load by focusing attention

### Implementation Guidelines

#### Never Remove Default Focus Indicator
```css
/* ❌ NEVER DO THIS unless replacing with custom styling */
outline: none;
```

#### Design Accessible Hover and Focus States

**All interactive elements need hover AND focus states:**
- Buttons, links
- Text fields
- Navigation elements
- Radio buttons, checkboxes

**Difference between hover and focus:**
| State | Purpose |
|-------|---------|
| Hover | "You could interact with this" |
| Focus | "You ARE interacting with this right now" |

**Other important states:**
- Error state
- Loading state
- Inactive/disabled state

#### Focus Indicator Contrast

The focus indicator must be visible against **both**:
- The element itself
- The background behind it

**WCAG requirement:** 3:1 contrast ratio for UI components

---

## 4. Key Principles Summary

### For TuxMate Application

| Principle | Application |
|-----------|-------------|
| **Dismissible** | Tooltips close with Escape key |
| **Hoverable** | Tooltips stay visible when hovering content |
| **Persistent** | Content stays until user dismisses |
| **Keyboard** | All features work with Tab/Arrow/Enter/Space |
| **Focus Visible** | Clear visual indicator on focused elements |
| **Contrast** | 3:1 minimum for UI components |

### Recommended Key Bindings

| Key | Common Action |
|-----|---------------|
| `Tab` | Move to next focusable element |
| `Shift+Tab` | Move to previous element |
| `Enter/Space` | Activate/select |
| `Arrow keys` | Navigate within components |
| `Escape` | Dismiss/close |
| `?` | Show help |

---

## Further Reading

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs - Keyboard](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard)
- [18F - Keyboard Access](https://accessibility.18f.gov/keyboard/)
- [Style hover, focus, and active states differently](https://zellwk.com/blog/style-hover-focus-active-states/)
- [Accessible Custom Focus Indicators](https://uxdesign.cc/accessible-custom-focus-indicators-da4768d1fb7b)
