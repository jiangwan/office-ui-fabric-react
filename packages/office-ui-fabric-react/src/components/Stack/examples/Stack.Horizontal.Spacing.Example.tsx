import * as React from 'react';
import { mergeStyleSets, DefaultPalette, Stack } from 'office-ui-fabric-react';

export class HorizontalStackSpacingExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    const styles = mergeStyleSets({
      root: {
        background: DefaultPalette.themeTertiary,
        width: 300
      },

      item: {
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: DefaultPalette.themePrimary,
        color: DefaultPalette.white
      }
    });

    const tokens = {
      numericalSpacing: {
        childrenGap: 10
      },
      customSpacing: {
        childrenGap: '10%'
      },
      themedExtraSmall: {
        childrenGap: 's2'
      },
      themedSmall: {
        childrenGap: 's1'
      },
      themedMedium: {
        childrenGap: 'm'
      },
      themedLarge: {
        childrenGap: 'l1'
      },
      themedExtraLarge: {
        childrenGap: 'l2'
      }
    };

    return (
      <Stack tokens={tokens.numericalSpacing}>
        <Stack horizontal disableShrink horizontalAlign="space-between">
          <Stack>
            <span>Numerical spacing</span>
            <Stack horizontal className={styles.root} tokens={tokens.numericalSpacing} padding={10}>
              <span className={styles.item}>1</span>
              <span className={styles.item}>2</span>
              <span className={styles.item}>3</span>
            </Stack>
          </Stack>
          <Stack>
            <span>Custom spacing</span>
            <Stack horizontal className={styles.root} tokens={tokens.customSpacing} padding="s1 15%">
              <span className={styles.item}>1</span>
              <span className={styles.item}>2</span>
              <span className={styles.item}>3</span>
            </Stack>
          </Stack>
        </Stack>

        <Stack horizontal disableShrink horizontalAlign="space-between">
          <Stack>
            <span>Themed spacing (extra small)</span>
            <Stack horizontal className={styles.root} tokens={tokens.themedExtraSmall} padding="s2">
              <span className={styles.item}>1</span>
              <span className={styles.item}>2</span>
              <span className={styles.item}>3</span>
            </Stack>
          </Stack>
          <Stack>
            <span>Themed spacing (small)</span>
            <Stack horizontal className={styles.root} tokens={tokens.themedSmall} padding="s1">
              <span className={styles.item}>1</span>
              <span className={styles.item}>2</span>
              <span className={styles.item}>3</span>
            </Stack>
          </Stack>
          <Stack>
            <span>Themed spacing (medium)</span>
            <Stack horizontal className={styles.root} tokens={tokens.themedMedium} padding="m">
              <span className={styles.item}>1</span>
              <span className={styles.item}>2</span>
              <span className={styles.item}>3</span>
            </Stack>
          </Stack>
        </Stack>

        <Stack horizontal horizontalAlign="space-between">
          <Stack>
            <span>Themed spacing (large)</span>
            <Stack horizontal className={styles.root} tokens={tokens.themedLarge} padding="l1">
              <span className={styles.item}>1</span>
              <span className={styles.item}>2</span>
              <span className={styles.item}>3</span>
            </Stack>
          </Stack>
          <Stack>
            <span>Themed spacing (extra large)</span>
            <Stack horizontal className={styles.root} tokens={tokens.themedExtraLarge} padding="l2">
              <span className={styles.item}>1</span>
              <span className={styles.item}>2</span>
              <span className={styles.item}>3</span>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
  }
}
