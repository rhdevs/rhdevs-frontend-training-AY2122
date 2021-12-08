import { Modal } from 'antd'
import { SettingHeader, SettingSubheader, TimeSettingContainer } from './styles/SettingsModal.styled'
import React from 'react'

const SettingsModal = (props: {
  visible: boolean
  footer: JSX.Element
  onCancel: () => void
  times: Record<string, number>
  renderOptions: (key: string) => JSX.Element
}) => {
  return (
    <Modal visible={props.visible} footer={props.footer} centered maskClosable onCancel={props.onCancel}>
      <SettingHeader>Settings</SettingHeader>
      <SettingSubheader>TIME(MINUTES)</SettingSubheader>
      <TimeSettingContainer>{Object.keys(props.times).map(props.renderOptions)}</TimeSettingContainer>
    </Modal>
  )
}

export default SettingsModal
