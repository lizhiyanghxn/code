import React, { useState } from 'react';
import { Button, Switch, Modal } from 'antd';
import { Steps } from '../../../index';

export default () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isCenter, setIsCenter] = useState(false);

  const showModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <>
      <div>
        <Button
          type="primary"
          onClick={showModal}
          style={{
            position: 'absolute',
            top: '50%',
            right: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          查看效果
        </Button>
      </div>
      <Modal title="Basic Modal" visible={modalVisible} onOk={closeModal} onCancel={closeModal}>
        <Steps
          currentStep={2}
          stepsConfig={['第一步', '第二步', '第三步']}
          usage="modal"
          isCenter={isCenter}
        />
        切换是否居中: <Switch onChange={() => setIsCenter(!isCenter)} />
      </Modal>
    </>
  );
};
