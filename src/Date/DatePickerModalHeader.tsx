import * as React from 'react'
import { Animated, StyleSheet, SafeAreaView } from 'react-native'
import { Appbar, Button, overlay, useTheme } from 'react-native-paper'

import { useColorOnPrimaryBackground } from '../utils'

export interface DatePickerModalHeaderProps {
  disableSafeTop?: boolean
  saveLabel?: string
  onDismiss: () => void
  onSave: () => void
}

export default function DatePickerModalHeader(
  props: DatePickerModalHeaderProps
) {
  const theme = useTheme()

  const { saveLabel = 'Save', disableSafeTop } = props

  const backgroundColor =
    theme.dark && theme.mode === 'adaptive'
      ? overlay(4, theme.colors.surface)
      : theme.colors.primary

  const color = useColorOnPrimaryBackground(backgroundColor)

  return (
    <>
      <Animated.View
        style={[
          styles.animated,
          {
            backgroundColor,
          },
        ]}
      >
        <SafeAreaView
          style={[
            styles.safeContent,
            disableSafeTop && styles.safeContentNoTop,
          ]}
        >
          <Appbar
            style={[
              styles.appbarHeader,
              { backgroundColor: backgroundColor.toString() },
            ]}
          >
            <Appbar.Action
              icon="close"
              onPress={props.onDismiss}
              color={color}
            />
            <Appbar.Content title={''} />
            <Button color={color} onPress={props.onSave}>
              {saveLabel}
            </Button>
          </Appbar>
        </SafeAreaView>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  animated: {
    paddingBottom: 0,
    elevation: 4,
  },
  safeContent: {
    paddingBottom: 0,
  },
  safeContentNoTop: {
    paddingTop: 0,
  },
  header: {
    height: 75,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 12,
  },
  headerContentContainer: { marginTop: 5, flexDirection: 'row' },
  label: { color: '#fff', letterSpacing: 1, fontSize: 13 },
  singleHeaderText: { color: '#fff', fontSize: 25 },
  rangeHeaderText: { color: '#fff', fontSize: 25 },
  headerTextFilled: { color: 'rgba(255,255,255,1)' },
  headerTextEmpty: { color: 'rgba(255,255,255,0.5)' },
  headerSeparator: {
    color: 'rgba(255,255,255,1)',
    fontSize: 25,
    paddingLeft: 6,
    paddingRight: 6,
  },
  appbarHeader: {
    elevation: 0,
    // alignItems:'center'
  },
})
